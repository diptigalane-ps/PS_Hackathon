// src/redux/incomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchExpensesFromAPI } from '../api/apiService';

// Async thunk for fetching incomes
export const fetchExpenses = createAsyncThunk('expense/fetchExpenses', async () => {
	const response = await fetchExpensesFromAPI()
	if (response) {
		return response	
	} else {
		return []
	}
});

const expenseSlice = createSlice({
	name: 'expenses',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchExpenses.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchExpenses.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchExpenses.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default expenseSlice.reducer;
