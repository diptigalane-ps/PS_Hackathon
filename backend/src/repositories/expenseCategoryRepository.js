// repositories/expenseCategoryRepository.js
import ExpenseCategory from '../models/expenseCategory.js';

export const getAllExpenseCategories = async () => {
  return await ExpenseCategory.findAll();
};
