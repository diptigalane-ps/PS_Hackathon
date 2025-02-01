// routes/incomeTransactionRoutes.js
import express from 'express';
import * as incomeTransactionController from '../controllers/incomeTransactionController.js';
import verifyToken from "../middleware/auth.js";

const router = express.Router();

router.route('').all(verifyToken)
.get(incomeTransactionController.getAllIncomeTransactions)
.post(incomeTransactionController.createIncomeTransaction);

router.route('/:id').all(verifyToken)
.get(incomeTransactionController.getIncomeTransactionById)
.put(incomeTransactionController.updateIncomeTransaction)
.delete(incomeTransactionController.deleteIncomeTransaction);

export default router;
