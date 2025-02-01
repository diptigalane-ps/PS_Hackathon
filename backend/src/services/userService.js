// services/userService.js
import * as userRepository from '../repositories/userRepository.js';
import * as incomeTransactionRepository from '../repositories/incomeTransactionRepository.js';
import * as expenseTransactionRepository from '../repositories/expenseTransactionRepository.js';
import IncomeCategory from '../models/incomeCategory.js';
import ExpenseCategory from '../models/expenseCategory.js';
import moment from "moment";
import { Op } from 'sequelize';
import { getTip } from './generativeService.js';

export const createUser = async (data) => {
  try {
    return await userRepository.createUser(data);
  } catch (error) {
    throw error;
  }
};

export const getDashboardData = async (userId, startDate, endDate) => {
  try {
    // Fetch income transactions
    const incomeOptions = {
      where: {
        user_id: userId,
        date: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
        },
      },
      include: [IncomeCategory],
      order: [['date', 'ASC']]
    };
    const incomeTransactions = await incomeTransactionRepository.getAllIncomeTransactions(incomeOptions);

    // Fetch expense transactions
    const expenseOptions = {
      where: {
        user_id: userId,
        date: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
        },
      },
      include: [ExpenseCategory],
      order: [['date', 'ASC']]
    };
    let expenseTransactions = await expenseTransactionRepository.getAllExpenseTransactions(expenseOptions);

    const totalIncome = {
      value: 0,
      data: [],
    };

    const incomeDetails = incomeTransactions.reduce((cur, next) => {
      const date = next.date.toISOString().split('T')[0];      
      if (!cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')]) {
        cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] = 0;
      }
      cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] += parseFloat(next.amount);
      totalIncome.value += parseFloat(next.amount);
      return cur;
    }, {})

    let incomeStartDay = startDate.clone();
    while (incomeStartDay.isSameOrBefore(endDate)) {
      if ( incomeDetails[incomeStartDay.format('DD-MM-YYYY')] ) {
        totalIncome.data.push(incomeDetails[incomeStartDay.format('DD-MM-YYYY')]);
      } else {
        totalIncome.data.push(0);
      }
      incomeStartDay = incomeStartDay.add(1, 'day');
    }

    const totalExpense = {
      value: 0,
      data: [],
    };

    const filteredExpenseTransactions = expenseTransactions.filter(transaction => ![17, 18].includes(transaction.expense_category_id));
    const categoriesData = {};
    const expenseDetails = filteredExpenseTransactions.reduce((cur, next) => {
      const date = next.date.toISOString().split('T')[0];
      
      if (!categoriesData[next['Expense_Category'].name]) {
        categoriesData[next['Expense_Category'].name] = 0;
      }
      categoriesData[next['Expense_Category'].name] += parseFloat(next.amount);

      if (!cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')]) {
        cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] = 0;
      }
      cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] += parseFloat(next.amount);
      totalExpense.value += parseFloat(next.amount);
      return cur;
    }, {})
    
    let expenseStartDay = startDate.clone();
    while (expenseStartDay.isSameOrBefore(endDate)) {
      if ( expenseDetails[expenseStartDay.format('DD-MM-YYYY')] ) {
        totalExpense.data.push(expenseDetails[expenseStartDay.format('DD-MM-YYYY')]);
      } else {
        totalExpense.data.push(0);
      }
      expenseStartDay = expenseStartDay.add(1, 'day');
    }

    const totalInvestments = {
      value: 0,
      data: [],
    };
    const filteredInvestmentTransactions = expenseTransactions.filter(transaction => [17, 18].includes(transaction.expense_category_id));
    const investmentDetails = filteredInvestmentTransactions.reduce((cur, next) => {
      const date = next.date.toISOString().split('T')[0];      
      if (!cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')]) {
        cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] = 0;
      }
      cur[moment(date, 'YYYY-MM-DD').format('DD-MM-YYYY')] += parseFloat(next.amount);
      totalInvestments.value += parseFloat(next.amount);
      return cur;
    }, {})
    
    let investmentStartDay = startDate.clone();
    while (investmentStartDay.isSameOrBefore(endDate)) {
      if ( investmentDetails[investmentStartDay.format('DD-MM-YYYY')] ) {
        totalInvestments.data.push(investmentDetails[investmentStartDay.format('DD-MM-YYYY')]);
      } else {
        totalInvestments.data.push(0);
      }
      investmentStartDay = investmentStartDay.add(1, 'day');
    }
    const tip = await getTip();

    const response = {
        tip,
        total: {
          income: totalIncome,
          expense: totalExpense,
          investment: totalInvestments,
          remaining: totalIncome.value - totalExpense.value,
        },
        pieChart: {
          expenses: {
            data: Object.entries(categoriesData || {}).map(([label, value]) => ({ label, value })),
            percentage: Object.entries(categoriesData || {}).map(([label, value]) => ({ name: label, value: parseFloat((( value / totalExpense.value ) * 100).toFixed(2)) })),
          },
        },
    };
    return response
  } catch (error) {
    throw error;
  }
} 
