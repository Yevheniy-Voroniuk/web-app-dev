import dealService from '../services/deal-service.js';

const dealController = {
    async getDeals(req, res, next) {
        try {
            const deals = await dealService.getDeals();
            return res.status(200).json(deals);
        } catch (error) {
            next(error);
        }
    },

    async getDealById(req, res, next) {
        try {
            const deal = await dealService.getDealById(req.params.id);
            return res.status(200).json(deal);
        } catch (error) {
            next(error);
        }
    },

    async createDeal(req, res, next) {
        try {
            await dealService.createDeal(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async updateDeal(req, res, next) {
        try {
            await dealService.updateDeal(req.params.id, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteDeal(req, res, next) {
        try {
            await dealService.deleteDeal(req.params.id);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },
};

export default dealController;