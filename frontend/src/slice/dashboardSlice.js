// src/redux/dashboardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDashboardFromAPI } from '../api/apiService';

// Async thunk for fetching dashboard
export const fetchDashboard = createAsyncThunk('users/fetchDashboard', async (data) => {
	const response = await fetchDashboardFromAPI(data)
	if (response) {
		return response
	} else {
		return []
	}
});

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDashboard.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchDashboard.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchDashboard.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default dashboardSlice.reducer;
