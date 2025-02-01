// routes/expenseTransactionRoutes.js
import express from 'express';
import * as expenseTransactionController from '../controllers/expenseTransactionController.js';
import verifyToken from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .all(verifyToken)
  .get(expenseTransactionController.getAllExpenseTransactions)
  .post(expenseTransactionController.createExpenseTransaction);

router.route('/:id')
  .all(verifyToken)
  .get(expenseTransactionController.getExpenseTransactionById)
  .put(expenseTransactionController.updateExpenseTransaction)
  .delete(expenseTransactionController.deleteExpenseTransaction);

export default router;
