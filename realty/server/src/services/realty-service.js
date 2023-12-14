import ApiError from '../exceptions/api-error.js';
import realtyModel from '../models/realty-model.js';
import dealService from './deal-service.js';
import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs/promises';

const RealtyService = {
    async getRealty() {
        const realty = await realtyModel.findAll();
        return realty;
    },

    async getRealtyById(id) {
        const realty = await realtyModel.findOne({where: {id}});
        if (!realty) {
            throw ApiError.BadRequest('Realty not found');
        }
        return realty;
    },

    async createRealty(body, photo) {
        const {type, city, area, rooms, price} = body;
        const photoName = photo.filename;
        await realtyModel.create({type, city, area, rooms, price, photo: photoName});
    },

    async updateRealty(id, body, photo) {
        const realty = await realtyModel.findOne({where: {id}});
        if (!realty) {
            throw ApiError.BadRequest('Realty not found');
        }
        const {type, city, area, rooms, price} = body;
        const updatedFields = {};
        updatedFields.type = type;
        updatedFields.city = city;
        updatedFields.area = area;
        updatedFields.rooms = rooms;
        updatedFields.price = price;
        if (photo) {
            updatedFields.photo = photo.filename;
            await this.deletePhoto(realty.photo);
        }
        await realty.update(updatedFields);
    },

    async deleteRealty(id) {
        const realty = await realtyModel.findOne({where: {id}});
        if (!realty) {
            throw ApiError.BadRequest('Realty not found');
        }
        await this.deletePhoto(realty.photo);
        await realty.destroy();
    },

    async deletePhoto(photo) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const photoPath = path.join(__dirname, '../../uploads', photo);
        try {
            await fs.unlink(photoPath);
        } catch (error) {}
    },

    async buyRealty(token, body) {
        const {realtyId} = body;
        const realty = await realtyModel.findOne({where: {id: realtyId}});
        if (!realty) {
            throw ApiError.BadRequest('Realty not found');
        }
        await dealService.createDeal(token, {realtyId});
    },
};

export default RealtyService;