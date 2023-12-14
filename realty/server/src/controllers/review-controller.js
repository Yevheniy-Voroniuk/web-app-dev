import reviewService from '../services/review-service.js';

const reviewController = {
    async getReviews(req, res, next) {
        try {
            const reviews = await reviewService.getReviews();
            return res.status(200).json(reviews);
        } catch (error) {
            next(error);
        }
    },

    async getReviewById(req, res, next) {
        try {
            const review = await reviewService.getReviewById(req.params.id);
            return res.status(200).json(review);
        } catch (error) {
            next(error);
        }
    },

    async createReview(req, res, next) {
        try {
            await reviewService.createReview(req.cookies.accessToken, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async updateReview(req, res, next) {
        try {
            await reviewService.updateReview(req.params.id, req.body);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },

    async deleteReview(req, res, next) {
        try {
            await reviewService.deleteReview(req.params.id);
            return res.status(200).send();
        } catch (error) {
            next(error);
        }
    },
};

export default reviewController;