// routes/userRoutes.js
import express from 'express';
import * as userController from '../controllers/userController.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.post('/', verifyToken, userController.createUser);
router.post('/dashboard', verifyToken, userController.getDashboardData);

export default router;
