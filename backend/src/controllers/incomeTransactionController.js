// controllers/incomeTransactionController.js
import * as incomeTransactionService from '../services/incomeTransactionService.js';
import { incomeTransactionSchema, incomeTransactionUpdateSchema } from '../validations/incomeTransactionValidation.js';

export const createIncomeTransaction = async (req, res) => {
  try {
    await incomeTransactionSchema.validate(req.body);    
    const transaction = await incomeTransactionService.createIncomeTransaction(req.user, req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllIncomeTransactions = async (req, res) => {
  try {
    const transactions = await incomeTransactionService.getAllIncomeTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIncomeTransactionById = async (req, res) => {
  try {
    const transaction = await incomeTransactionService.getIncomeTransactionById(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIncomeTransaction = async (req, res) => {
  try {
    await incomeTransactionUpdateSchema.validate(req.body);
    const transaction = await incomeTransactionService.updateIncomeTransaction(req.params.id, req.body);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteIncomeTransaction = async (req, res) => {
  try {
    const success = await incomeTransactionService.deleteIncomeTransaction(req.params.id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Transaction not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllIncomeCategories = async (req, res) => {
  try {
    const categories = await incomeTransactionService.getAllIncomeCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
