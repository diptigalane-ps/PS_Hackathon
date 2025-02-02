// controllers/expenseTransactionController.js
import * as expenseTransactionService from '../services/expenseTransactionService.js';
import { expenseTransactionSchema, expenseTransactionUpdateSchema } from '../validations/expenseTransactionValidation.js';

export const createExpenseTransaction = async (req, res) => {
  try {
    await expenseTransactionSchema.validate(req.body);
    const transaction = await expenseTransactionService.createExpenseTransaction(req.user, req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllExpenseTransactions = async (req, res) => {
  try {
    const skip = Number(req.query.skip) || 0;
    const transactions = await expenseTransactionService.getAllExpenseTransactions(req.user.id, skip);
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExpenseTransactionById = async (req, res) => {
  try {
    const transaction = await expenseTransactionService.getExpenseTransactionById(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExpenseTransaction = async (req, res) => {
  try {
    await expenseTransactionUpdateSchema.validate(req.body);
    const transaction = await expenseTransactionService.updateExpenseTransaction(req.params.id, req.body);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteExpenseTransaction = async (req, res) => {
  try {
    const success = await expenseTransactionService.deleteExpenseTransaction(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllExpenseCategories = async (req, res) => {
  try {
    const categories = await expenseTransactionService.getAllExpenseCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
