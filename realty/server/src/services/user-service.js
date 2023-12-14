import bcrypt from 'bcrypt';
import UserModel from '../models/user-model.js';
import RealtyModel from "../models/realty-model.js";
import tokenService from "./token-service.js";
import ApiError from '../exceptions/api-error.js';

const UserService = {
    async getUsers() {
        const users = await UserModel.findAll();
        return users;
    },

    async getUserById(id) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        return user;
    },

    async createUser(body) {
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
        await UserModel.create({
            name,
            surname,
            email,
            password: hashedPassword,
            phone,
            role,
        });
    },

    async updateUser(id, body) {
        const {name, surname, email, role} = body;
        let {phone} = body;
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with ${email} email`);
        }
        const userWithSameEmail = await UserModel.findOne({where: {email}});
        if (userWithSameEmail && userWithSameEmail.id !== parseInt(id)) {
            throw ApiError.BadRequest(`User with ${email} email already exists`);
        }
        if (phone) {
            const userWithSamePhone = await UserModel.findOne({where: {phone}});
            if (userWithSamePhone && userWithSamePhone.id !== parseInt(id)) {
                throw ApiError.BadRequest(`User with ${phone} phone number already exists`);
            }
        } else {
            phone = null;
        }

        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.surname = surname;
        updatedFields.email = email;
        updatedFields.phone = phone;
        updatedFields.role = role;
        await user.update(updatedFields);
    },

    async deleteUser(id, token) {
        const user = await UserModel.findOne({where: {id}});
        if (!user) {
            throw ApiError.BadRequest(`No user found with id = ${id}`);
        }
        const userData = tokenService.validateAccessToken(token);
        if (userData.id === parseInt(id)) {
            throw ApiError.BadRequest(`You can't delete yourself`);
        }
        await user.destroy();
    },

    async getWishList(token) {
        console.log("token-from-wishlist", token)
        const userData = tokenService.validateAccessToken(token);
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const userId = userData.id;
        const user = await UserModel.findOne({where: {id: userId}});
        const listFromDb = user.wishList;
        const list = JSON.parse(listFromDb);
        return list;
    },

    async addToWishList(token, body) {
        const {realtyId} = body;
        const userData = tokenService.validateAccessToken(token);
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const realty = await RealtyModel.findOne({where: {id: realtyId}});
        if (!realty) {
            throw ApiError.BadRequest("No realty found with this id");
        }
        const userId = userData.id;
        const user = await UserModel.findOne({where: {id: userId}});
        const listFromDb = user.wishList;
        const list = JSON.parse(listFromDb);
        if (list.includes(realtyId)) {
            throw ApiError.BadRequest("This realty is already in your wish list");
        }
        list.push(realtyId);
        user.wishList = JSON.stringify(list);
        await user.save();
    },

    async deleteFromWishList(token, body) {
        const {realtyId} = body;
        const userData = tokenService.validateAccessToken(token);
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const realty = await RealtyModel.findOne({where: {id: realtyId}});
        if (!realty) {
            throw ApiError.BadRequest("No realty found with this id");
        }
        const userId = userData.id;
        const user = await UserModel.findOne({where: {id: userId}});
        const listFromDb = user.wishList;
        const list = JSON.parse(listFromDb);
        if (!list.includes(realtyId)) {
            throw ApiError.BadRequest("This realty is not in your wish list");
        }
        const index = list.indexOf(realtyId);
        list.splice(index, 1);
        user.wishList = JSON.stringify(list);
        await user.save();
    },
};

export default UserService;