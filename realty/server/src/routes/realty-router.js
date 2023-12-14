import express from 'express';
import realtyController from '../controllers/realty-controller.js';
import upload from '../middlewares/image-middleware.js';

const router = express.Router();

router.get('/realty', realtyController.getRealty);
router.get('/realty/:id', realtyController.getRealtyById);
router.post('/realty', upload.single('photo'), realtyController.createRealty);
router.patch('/realty/:id', upload.single('photo'), realtyController.updateRealty);
router.delete('/realty/:id', realtyController.deleteRealty);
router.post('/realty/buy', realtyController.buyRealty);

export default router;