import express from 'express';
import dealController from '../controllers/deal-controller.js';

const router = express.Router();

router.get('/deals', dealController.getDeals);
router.get('/deal/:id', dealController.getDealById);
router.post('/deal', dealController.createDeal);
router.patch('/deal/:id', dealController.updateDeal);
router.delete('/deal/:id', dealController.deleteDeal);

export default router;