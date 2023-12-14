import serviceService from '../services/service-service.js';

const serviceController = {
    async getServices(req, res, next) {
        try {
            const services = await serviceService.getServices();
            return res.status(200).json(services);
        } catch (error) {
            next(error);
        }
    },

    async getServiceById(req, res, next) {
        try {
            const service = await serviceService.getServiceById(req.params.id);
            return res.status(200).json(service);
        } catch (error) {
            next(error);
        }
    },

    async createService(req, res, next) {
        try {
            await serviceService.createService(req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async updateService(req, res, next) {
        try {
            await serviceService.updateService(req.params.id, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteService(req, res, next) {
        try {
            await serviceService.deleteService(req.params.id);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async buyService(req, res, next) {
        try {
            await serviceService.buyService(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    }
};

export default serviceController;