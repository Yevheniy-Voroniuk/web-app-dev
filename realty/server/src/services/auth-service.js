import bcrypt from 'bcrypt';
import UserModel from '../models/user-model.js';
import tokenService from './token-service.js';
import UserDto from '../dtos/user-dto.js';
import ApiError from '../exceptions/api-error.js';

const AuthService = {
    async register(body) {
        const {name, surname, email, password, role} = body;
        let {phone} = body;
        const userWithSameEmail = await UserModel.findOne({where: {email}});
        if (userWithSameEmail) {
            throw ApiError.BadRequest(`User with ${email} email already exists`);
        }
        if (phone) {
            const userWithSamePhone = await UserModel.findOne({where: {phone}});
            if (userWithSamePhone) {
                throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
            }
        } else {
            phone = null;
        }

        const hashedPassword = await bcrypt.hash(password, 3);
        const newUser = await UserModel.create({
            name,
            surname,
            email,
            password: hashedPassword,
            phone,
            role,
        });
        const userDto = new UserDto(newUser);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    },

    async login(body) {
        const {email, password} = body;
        const user = await UserModel.findOne({where: {email}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with ${email} email`);
        }
        const isPasswordEquals = await bcrypt.compare(password, user.password);
        if (!isPasswordEquals) {
            throw ApiError.BadRequest(`Wrong password for user with ${email} email`);
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto};
    },

    async logout(refreshToken) {
        console.log('LOGOUT');
        console.log('refreshToken', refreshToken)
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        console.log('userData', userData)
        console.log('tokenFromDb', tokenFromDb)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        await tokenService.removeToken(refreshToken);
    },

    async refresh(refreshToken) {
        console.log('REFRESH');
        console.log('refreshToken', refreshToken)
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        console.log('userData', userData)
        console.log('tokenFromDb', tokenFromDb)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await UserModel.findOne({where: {id: userData.id}});
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return tokens;
    },
};

export default AuthService;