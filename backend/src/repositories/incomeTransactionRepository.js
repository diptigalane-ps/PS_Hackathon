// repositories/incomeTransactionRepository.js
import IncomeTransaction from '../models/incomeTransaction.js';

export const createIncomeTransaction = async (data) => {
  return await IncomeTransaction.create(data);
};

export const getAllIncomeTransactions = async (options = {}) => {
  return await IncomeTransaction.findAll(options);
};

export const getIncomeTransactionById = async (id) => {
  return await IncomeTransaction.findByPk(id);
};

export const updateIncomeTransaction = async (id, data) => {
  const transaction = await IncomeTransaction.findByPk(id);
  if (transaction) {
    return await transaction.update(data);
  }
  return null;
};

export const deleteIncomeTransaction = async (id) => {
  const transaction = await IncomeTransaction.findByPk(id);
  if (transaction) {
    await transaction.destroy();
    return true;
  }
  return false;
};
