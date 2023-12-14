import ApiError from '../exceptions/api-error.js';
import dealModel from '../models/deal-model.js';
import userModel from '../models/user-model.js';
import realtyModel from '../models/realty-model.js';
import serviceModel from '../models/service-model.js';
import tokenService from './token-service.js';

const DealService = {
    async getDeals() {
        const deals = await dealModel.findAll();
        return deals;
    },

    async getDealById(id) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        return deal;
    },

    async createDeal(token, body) {
        let {userId, realtyId, serviceId, price} = body;
        if (!userId) {
            const userData = tokenService.validateAccessToken(token);
            if (!userData) {
                throw ApiError.UnauthorizedError();
            }
            userId = userData.id;
        } else {
            const user = await userModel.findOne({where: {id: userId}});
            if (!user) {
                throw ApiError.BadRequest('User not found');
            }
        }
        if (realtyId === '') {
            realtyId = null;
        }
        if (serviceId === '') {
            serviceId = null;
        }
        if (realtyId && serviceId) {
            throw ApiError.BadRequest('Realty and service are not allowed together');
        }
        if (!realtyId && !serviceId) {
            throw ApiError.BadRequest('Realty id or service id are required');
        }

        if (realtyId) {
            const realty = await realtyModel.findOne({where: {id: realtyId}});
            if (!realty) {
                throw ApiError.BadRequest('Realty not found');
            }
            if (!price) {
                price = realty.price;
            }
        } else if (serviceId) {
            const service = await serviceModel.findOne({where: {id: serviceId}});
            if (!service) {
                throw ApiError.BadRequest('Service not found');
            }
            if (!price) {
                price = service.price;
            }
        }

        const today = new Date();
        const date = today.toISOString().split('T')[0];
        await dealModel.create({userId, realtyId, serviceId, price, date});
    },

    async updateDeal(id, body) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        let {userId, realtyId, serviceId, price} = body;
        const user = await userModel.findOne({where: {id: userId}});
        if (!user) {
            throw ApiError.BadRequest('User not found');
        }
        if (realtyId === '') {
            realtyId = null;
        }
        if (serviceId === '') {
            serviceId = null;
        }
        if (realtyId && serviceId) {
            throw ApiError.BadRequest('Realty and service are not allowed together');
        }
        if (!realtyId && !serviceId) {
            throw ApiError.BadRequest('Realty id or service id are required');
        }

        if (realtyId) {
            const realty = await realtyModel.findOne({where: {id: realtyId}});
            if (!realty) {
                throw ApiError.BadRequest('Realty not found');
            }
            if (!price) {
                price = realty.price;
            }
        } else if (serviceId) {
            const service = await serviceModel.findOne({where: {id: serviceId}});
            if (!service) {
                throw ApiError.BadRequest('Service not found');
            }
            if (!price) {
                price = service.price;
            }
        }

        const today = new Date();
        const date = today.toISOString().split('T')[0];
        const updatedFields = {};
        updatedFields.userId = userId;
        updatedFields.realtyId = realtyId;
        updatedFields.serviceId = serviceId;
        updatedFields.price = price;
        updatedFields.date = date;
        await deal.update(updatedFields);
    },

    async deleteDeal(id) {
        const deal = await dealModel.findOne({where: {id}});
        if (!deal) {
            throw ApiError.BadRequest('Deal not found');
        }
        await deal.destroy();
    },
}

export default DealService;