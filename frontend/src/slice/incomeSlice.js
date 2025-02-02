// src/redux/incomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchIncomeFromAPI } from '../api/apiService';

// Async thunk for fetching incomes
export const fetchIncomes = createAsyncThunk('incomes/fetchIncomes', async () => {
	const response = await fetchIncomeFromAPI()
	if (response) {
		return response	
	} else {
		return []
	}
});

const incomeSlice = createSlice({
	name: 'incomes',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchIncomes.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchIncomes.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchIncomes.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default incomeSlice.reducer;
