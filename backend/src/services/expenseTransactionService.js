// services/expenseTransactionService.js
import * as expenseTransactionRepository from '../repositories/expenseTransactionRepository.js';
import * as expenseCategoryRepository from '../repositories/expenseCategoryRepository.js';

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

export const getAllExpenseTransactions = async (user_id, skip) => {
  try {
    const options = {
      where: {
        user_id
      },
      limit: 10,
      offset: skip*10
    }
    return await expenseTransactionRepository.getAllExpenseTransactions(options);
  } catch (error) {
    throw error;
  }
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

export const getAllExpenseCategories = async () => {
  console.log("Here");
  return await expenseCategoryRepository.getAllExpenseCategories();
};
