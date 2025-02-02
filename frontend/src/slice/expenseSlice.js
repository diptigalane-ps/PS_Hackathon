// src/redux/incomeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching incomes
export const fetchExpenses = createAsyncThunk('expense/fetchExpenses', async () => {
	const response = await fetch('http://localhost:8080/api/expense', {
		method: 'GET', // Specify the HTTP method
		headers: {
			'Content-Type': 'application/json', // Specify the content type
			'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxOUEE5M090WlVRYm1JaWx0YmViZCJ9.eyJnaXZlbl9uYW1lIjoibmlraGlsIiwiZmFtaWx5X25hbWUiOiJjaGF2YW4iLCJuaWNrbmFtZSI6Im5pa2hpbGNoYXZhbjMyNTkiLCJuYW1lIjoibmlraGlsIGNoYXZhbiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NJbkpZa0NKM1AzTUNwcTFuTG83LWUwTGdBa1dJa0VjcUhsM3hIaU5ON1VWMVY0bmVzej1zOTYtYyIsInVwZGF0ZWRfYXQiOiIyMDI1LTAyLTAxVDE4OjI5OjUxLjUxNFoiLCJlbWFpbCI6Im5pa2hpbGNoYXZhbjMyNTlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vZGV2LW14NjVnaWxrcWtwNWphaWIudXMuYXV0aDAuY29tLyIsImF1ZCI6ImRkRTZNSWl0ZTF4cFp6am16OGdhSlJTV3pPdkJ4OExjIiwiaWF0IjoxNzM4NDM0NjAxLCJleHAiOjE3Mzg0NzA2MDEsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2MzkwODUxNjkzMjU5MTU3MDI1Iiwic2lkIjoiN2FQMXBHTkFldG1zR2YzMlpyM0hmWHlpcThfRVBwRGwiLCJub25jZSI6IlJWRlpMa2t1UlVWSmNFbHRjbnBCTjIweFZIVnVkV0U0TTJKSVVHTjVUVkJMUVhKc1lsQnBTV05aWVE9PSJ9.c3zO0jQvMW05XWNWkvUo0Q7iiPY_czGeg37TWZtkPaqciR4kHOepUGZD3L8m6jCjB2_jTS6c8jpyv-br3qMckRzjnFFt9URIjYujhPkxNxgoSOBGxh_ajdQsiP8nHikzBKUk-_TmgcMF85vBnbRPBVknNlVF_e-BGVuHACSrlGJJK4mUBfnCBvX0lk_iC6LPcPbxPIpBOmULYehi3AKUBoHIWBsGy96yks19gsJfULCd_oVHB0p7hVQ7yUtxN2LPgwsTB0-lpgSnFJ1wbhjdSvAU8Xva5vHm2q84UTdXhC7RO71hq-G_LGaKIRxVnT-41owkeaBMPLlOSkzZIOdwFA', // Example of an authorization header
			// Add any other headers you need
		},
	});
	if (!response.ok) {
		throw new Error('Failed to fetch incomes');
	}
	const data = await response.json();
	return data;
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
