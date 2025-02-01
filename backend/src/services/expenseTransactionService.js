// services/expenseTransactionService.js
import * as expenseTransactionRepository from '../repositories/expenseTransactionRepository.js';

export const createExpenseTransaction = async (user, data) => {
  try {
    const payload = {
      user_id: user.id,
      ...data
    };
    return await expenseTransactionRepository.createExpenseTransaction(payload);
  } catch (error) {
    throw error;
  }
};

export const getAllExpenseTransactions = async () => {
  return await expenseTransactionRepository.getAllExpenseTransactions();
};

export const getExpenseTransactionById = async (id) => {
  return await expenseTransactionRepository.getExpenseTransactionById(id);
};

export const updateExpenseTransaction = async (id, data) => {
  return await expenseTransactionRepository.updateExpenseTransaction(id, data);
};

export const deleteExpenseTransaction = async (id) => {
  return await expenseTransactionRepository.deleteExpenseTransaction(id);
};
