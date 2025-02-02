import * as incomeTransactionRepository from '../repositories/incomeTransactionRepository.js';
import * as incomeCategoryRepository from '../repositories/incomeCategoryRepository.js';
import IncomeCategory from '../models/incomeCategory.js';

export const createIncomeTransaction = async (user, data) => {
  try {
    const payload = {
      user_id: user.id,
      ...data
    }
    return await incomeTransactionRepository.createIncomeTransaction(payload);
  } catch (error) {
    throw error;
  }
};

export const getAllIncomeTransactions = async (user_id, skip) => {
  try {
    const options = {
      where: {
        user_id
      },
      limit: 10,
      offset: skip*10,
      include: [IncomeCategory],
    }
    return await incomeTransactionRepository.getAllIncomeTransactions(options);
    } catch (error) {
      throw error;
    }
};

export const getIncomeTransactionById = async (id) => {
  return await incomeTransactionRepository.getIncomeTransactionById(id);
};

export const updateIncomeTransaction = async (id, data) => {
  return await incomeTransactionRepository.updateIncomeTransaction(id, data);
};

export const deleteIncomeTransaction = async (id) => {
  return await incomeTransactionRepository.deleteIncomeTransaction(id);
};

export const getAllIncomeCategories = async () => {
    return await incomeCategoryRepository.getAllIncomeCategories();
};
