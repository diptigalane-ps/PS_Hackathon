import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slice/authSlice';
import incomeReducer from '../slice/incomeSlice';
import expenseReducer from '../slice/expenseSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    incomes: incomeReducer,
    expenses: expenseReducer
  },
});
