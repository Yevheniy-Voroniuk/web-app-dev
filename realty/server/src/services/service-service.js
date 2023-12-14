import ApiError from '../exceptions/api-error.js';
import serviceModel from '../models/service-model.js';
import dealService from './deal-service.js';

const ServiceService = {
    async getServices() {
        const services = await serviceModel.findAll();
        return services;
    },

    async getServiceById(id) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        return service;
    },

    async createService(body) {
        const {name, description, price} = body;
        const serviceWithSameName = await serviceModel.findOne({where: {name}});
        if (serviceWithSameName) {
            throw ApiError.BadRequest(`Service with name ${name} already exists`);
        }
        await serviceModel.create({name, description, price});
    },

    async updateService(id, body) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        const {name, description, price} = body;
        const serviceWithSameName = await serviceModel.findOne({where: {name}});
        if (serviceWithSameName && serviceWithSameName.id !== parseInt(id)) {
            throw ApiError.BadRequest(`Service with name ${name} already exists`);
        }
        const updatedFields = {};
        updatedFields.name = name;
        updatedFields.description = description;
        updatedFields.price = price;
        await service.update(updatedFields);
    },

    async deleteService(id) {
        const service = await serviceModel.findOne({where: {id}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        await service.destroy();
    },

    async buyService(token, body) {
        const {serviceId} = body;
        const service = await serviceModel.findOne({where: {id: serviceId}});
        if (!service) {
            throw ApiError.BadRequest('Service not found');
        }
        await dealService.createDeal(token, {serviceId});
    }
};

export default ServiceService;