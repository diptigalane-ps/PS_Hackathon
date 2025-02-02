// src/redux/dashboardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const requestBody = {
	month: "Jan"
}

// Async thunk for fetching dashboard
export const fetchDashboard = createAsyncThunk('users/fetchDashboard', async () => {
	const response = await fetch('http://localhost:8080/api/user/dashboard', {
		method: 'POST', // Specify the HTTP method
		headers: {
			'Content-Type': 'application/json', // Specify the content type
			'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxOUEE5M090WlVRYm1JaWx0YmViZCJ9.eyJnaXZlbl9uYW1lIjoibmlraGlsIiwiZmFtaWx5X25hbWUiOiJjaGF2YW4iLCJuaWNrbmFtZSI6Im5pa2hpbGNoYXZhbjMyNTkiLCJuYW1lIjoibmlraGlsIGNoYXZhbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJbkpZa0NKM1AzTUNwcTFuTG83LWUwTGdBa1dJa0VjcUhsM3hIaU5ON1VWMVY0bmVzej1zOTYtYyIsInVwZGF0ZWRfYXQiOiIyMDI1LTAyLTAyVDA0OjU4OjU3LjQwM1oiLCJlbWFpbCI6Im5pa2hpbGNoYXZhbjMyNTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LW14NjVnaWxrcWtwNWphaWIudXMuYXV0aDAuY29tLyIsImF1ZCI6ImRkRTZNSWl0ZTF4cFp6am16OGdhSlJTV3pPdkJ4OExjIiwiaWF0IjoxNzM4NDcyMzM4LCJleHAiOjE3Mzg1MDgzMzgsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2MzkwODUxNjkzMjU5MTU3MDI1Iiwic2lkIjoiSGxfLWMzdXVjajlzeENmV183ME0yVDJmVWFBQUNYTlIiLCJub25jZSI6IlJXdzNOMEptYVZob1ptdFdNQzFrWVdSa1QzWm1NekZ3UjNWWlJqTm5NSFpZY0c1ZlIwNU1iMmx6Tnc9PSJ9.JyW0WEwzdotpjTaQzK7QLHdhlAibL3l2oN8u8HIHVgX4ojJ8nOW3KYRx-X2_8XXDKUSNO0S0_agJPpONgo0yT0iqXP2D_hu9whXyum0bUUZRcvE3GFZuJoRYQK3zI5Xn3BJtk3zrx79niaHXzfyTp5_KxngKQN2PS7wv3WSOMqX-Ya2H-zTarMh5jWL40BeaoQFDW5Q4EJOZKlzVNHFGNu3UNySb6hsWbxHc7V8A1hQP_-TKvkKrAOoDrvPigdYSj2dyCqhEA6Q2EBnB251Tx-FGkBcVezkxzQVZXcuyCNYEhxjshT9UfWH37WMnG4D5EwDnHbUsT-Eeth7gMQ5mwQ', // Example of an authorization header
			// Add any other headers you need
		},
		body: JSON.stringify(requestBody)
	});
	if (!response.ok) {
		throw new Error('Failed to fetch incomes');
	}
	const data = await response.json();
	return data;
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
