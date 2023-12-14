import realtyService from '../services/realty-service.js';

const RealtyController = {
    async getRealty(req, res, next) {
        try {
            const realty = await realtyService.getRealty();
            return res.status(200).json(realty);
        } catch (error) {
            next(error);
        }
    },

    async getRealtyById(req, res, next) {
        try {
            const realty = await realtyService.getRealtyById(req.params.id);
            return res.status(200).json(realty);
        } catch (error) {
            next(error);
        }
    },

    async createRealty(req, res, next) {
        try {
            await realtyService.createRealty(req.body, req.file);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async updateRealty(req, res, next) {
        try {
            await realtyService.updateRealty(req.params.id, req.body, req.file);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteRealty(req, res, next) {
        try {
            await realtyService.deleteRealty(req.params.id);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async buyRealty(req, res, next) {
        try {
            await realtyService.buyRealty(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
}

export default RealtyController;