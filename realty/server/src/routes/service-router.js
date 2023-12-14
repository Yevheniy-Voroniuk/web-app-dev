import express from 'express';
import serviceController from '../controllers/service-controller.js';

const router = express.Router();

router.get('/services', serviceController.getServices);
router.get('/service/:id', serviceController.getServiceById);
router.post('/service', serviceController.createService);
router.patch('/service/:id', serviceController.updateService);
router.delete('/service/:id', serviceController.deleteService);
router.post('/service/buy', serviceController.buyService);

export default router;