// routes/index.js
import express from 'express';
import incomeTransactionRoutes from './incomeTransactionRoutes.js';
import expenseTransactionRoutes from "./expenseTransactionRoutes.js";

const router = express.Router();

// Mount the routes
router.use('/incomes', incomeTransactionRoutes);
router.use('/expense', expenseTransactionRoutes);

export default router;
