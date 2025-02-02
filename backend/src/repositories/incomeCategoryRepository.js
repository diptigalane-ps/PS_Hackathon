// repositories/incomeCategoryRepository.js
import IncomeCategory from '../models/incomeCategory.js';

export const getAllIncomeCategories = async () => {
  return await IncomeCategory.findAll();
};
