import express from 'express';
import reviewController from '../controllers/review-controller.js';

const router = express.Router();

router.get('/reviews', reviewController.getReviews);
router.get('/review/:id', reviewController.getReviewById);
router.post('/review', reviewController.createReview);
router.patch('/review/:id', reviewController.updateReview);
router.delete('/review/:id', reviewController.deleteReview);

export default router;