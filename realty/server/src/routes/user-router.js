import express from 'express';
import userController from '../controllers/user-controller.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.get('/user/wish-list', userController.getWishList);
router.get('/user/:id', userController.getUserById);
router.post('/user', userController.createUser);
router.patch('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);
router.post('/user/add-to-wish-list', userController.addToWishList);
router.post('/user/delete-from-wish-list', userController.deleteFromWishList);

export default router;