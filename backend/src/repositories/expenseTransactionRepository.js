// repositories/expenseTransactionRepository.js
import ExpenseTransaction from '../models/expenseTransaction.js';

export const createExpenseTransaction = async (data) => {
  return await ExpenseTransaction.create(data);
};

export const getAllExpenseTransactions = async (options = {}) => {
  return await ExpenseTransaction.findAll(options);
};

export const getExpenseTransactionById = async (id) => {
  return await ExpenseTransaction.findByPk(id);
};

export const updateExpenseTransaction = async (id, data) => {
  const transaction = await ExpenseTransaction.findByPk(id);
  if (transaction) {
    return await transaction.update(data);
  }
  return null;
};

export const deleteExpenseTransaction = async (id) => {
  const transaction = await ExpenseTransaction.findByPk(id);
  if (transaction) {
    await transaction.destroy();
    return true;
  }
  return false;
};
