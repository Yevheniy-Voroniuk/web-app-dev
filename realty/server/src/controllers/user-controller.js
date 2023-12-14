import userService from '../services/user-service.js';

const UserController = {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            return res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    },

    async getUserById(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            return res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    },

    async createUser(req, res, next) {
        try {
            await userService.createUser(req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            await userService.updateUser(req.params.id, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            await userService.deleteUser(req.params.id, req.cookies.accessToken);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async getWishList(req, res, next) {
        try {
            const wishList = await userService.getWishList(req.cookies.accessToken);
            return res.status(200).json(wishList);
        } catch (error) {
            next(error);
        }
    },

    async addToWishList(req, res, next) {
        try {
            await userService.addToWishList(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteFromWishList(req, res, next) {
        try {
            await userService.deleteFromWishList(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },
}

export default UserController;