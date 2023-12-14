import ApiError from '../exceptions/api-error.js';
import reviewModel from '../models/review-model.js';
import tokenService from './token-service.js';

const ReviewService = {
    async getReviews() {
        const reviews = await reviewModel.findAll();
        return reviews;
    },

    async getReviewById(id) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        return review;
    },

    async createReview(token, body) {
        const userData = tokenService.validateAccessToken(token);
        if (!userData) {
            throw ApiError.UnauthorizedError();
        }
        const userId = userData.id;
        const {message} = body;
        const today = new Date();
        const date = today.toISOString().split('T')[0];
        await reviewModel.create({userId, message, date});
    },

    async updateReview(id, body) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        const {message, date} = body;
        const updatedFields = {};
        updatedFields.message = message;
        updatedFields.date = date;
        await review.update(updatedFields);
    },

    async deleteReview(id) {
        const review = await reviewModel.findOne({where: {id}});
        if (!review) {
            throw ApiError.BadRequest('Review not found');
        }
        await review.destroy();
    },
};

export default ReviewService;