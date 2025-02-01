// routes/index.js
import express from 'express';
import incomeTransactionRoutes from './incomeTransactionRoutes.js';

const router = express.Router();

// Mount the routes
router.use('/incomes', incomeTransactionRoutes);

export default router;
