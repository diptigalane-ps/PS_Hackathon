import * as incomeTransactionRepository from '../repositories/incomeTransactionRepository.js';

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

export const getAllIncomeTransactions = async () => {
  return await incomeTransactionRepository.getAllIncomeTransactions();
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
