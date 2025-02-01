import axios from 'axios';

// Function to fetch categories from the API using id_token
export const fetchCategories = async (idToken) => {
  try {
    console.log("Using id_token:", idToken);
    
    const response = await axios.get('/api/expense/categories', {
      headers: {
        Authorization: `Bearer ${idToken}`,  // Use the ID token
      },
    });

    return response.data;  // Return the category data
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Function to submit expense data using id_token
export const submitExpense = async (expenseData, idToken) => {
  try {
    const response = await axios.post('/api/expense', expenseData, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxOUEE5M090WlVRYm1JaWx0YmViZCJ9.eyJuaWNrbmFtZSI6InJhc29wc19vd25lcl90ZXN0MSIsIm5hbWUiOiJyYXNvcHNfb3duZXJfdGVzdDFAcm9ib3QtbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMTRkNjI0ZTYzZDUwZTczODJjOWRmN2ZiNjc2YTI4ZWQ_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZyYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMi0wMVQwNjoxMDoxNC4xODhaIiwiZW1haWwiOiJyYXNvcHNfb3duZXJfdGVzdDFAcm9ib3QtbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vZGV2LW14NjVnaWxrcWtwNWphaWIudXMuYXV0aDAuY29tLyIsImF1ZCI6ImRkRTZNSWl0ZTF4cFp6am16OGdhSlJTV3pPdkJ4OExjIiwiaWF0IjoxNzM4Mzk4MjcwLCJleHAiOjE3Mzg0MzQyNzAsInN1YiI6ImF1dGgwfDY3OWRhMzc2MjQxNWU1ZGVlNDEwYWJlMSIsInNpZCI6IjJXOHVBZVBhN1F5M2FNNkFvYkNIR2ZZSHZiS0VGS3dLIiwibm9uY2UiOiJaQzVzTGsxaU5ucGFMWGhPVDNkcFlqSnJXV3QzVUVKd1pVMUthRmx4YjJoUVdsVkNlbkpFZW1wcFVBPT0ifQ.srYd1toYePASW-6VX8W918WZyyE9_4nr1Hajpmv8gng8MFSaRL2gBYz2-DE8X1Dv5ZDpP9eHzxEIQRxeNCTv2pyLXgS7eEFxbCl_n9tKwH23msA75CcqpyGIOtBrbtv8xdB91NrV_fcsoWBQcVYd-ZqY5Ps1RcomAPQu4vfpF3r3KcGiv0ReOKdNxPKItX-PyJZ1Yhaa0cLxTxg-ihdQA5Gy1Gub1G5lnlCZBP-O5V7K4x_cjrGMLoTetvcFIfCZwvUhpdHB4KuyLMfKsRf18JtGcJIyyFiUp5q-0pu-qmKYOPfYW12NVC2ApI574wtID9-4Ss6O-LDozUoVqLMKXw'}`,  // Use the ID token
      },
    });

    return response.data; // Return response data from the API
  } catch (error) {
    console.error('Error submitting expense:', error);
    throw error;
  }
};

// Function to fetch categories from the API using id_token
export const fetchIncomeCategories = async (idToken) => {
  try {
    console.log("Using id_token:", idToken);
    
    const response = await axios.get('/api/incomes/categories', {
      headers: {
        Authorization: `Bearer ${idToken}`,  // Use the ID token
      },
    });

    return response.data;  // Return the category data
  } catch (error) {
    console.error('Error fetching income categories:', error);
    throw error;
  }
};

// Function to submit income data using id_token
export const submitIncome = async (incomeData, idToken) => {
  try {
    const response = await axios.post('/api/incomes', incomeData, {
      headers: {
        Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxOUEE5M090WlVRYm1JaWx0YmViZCJ9.eyJuaWNrbmFtZSI6InJhc29wc19vd25lcl90ZXN0MSIsIm5hbWUiOiJyYXNvcHNfb3duZXJfdGVzdDFAcm9ib3QtbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMTRkNjI0ZTYzZDUwZTczODJjOWRmN2ZiNjc2YTI4ZWQ_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZyYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMi0wMVQwNjoxMDoxNC4xODhaIiwiZW1haWwiOiJyYXNvcHNfb3duZXJfdGVzdDFAcm9ib3QtbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOi8vZGV2LW14NjVnaWxrcWtwNWphaWIudXMuYXV0aDAuY29tLyIsImF1ZCI6ImRkRTZNSWl0ZTF4cFp6am16OGdhSlJTV3pPdkJ4OExjIiwiaWF0IjoxNzM4Mzk4MjcwLCJleHAiOjE3Mzg0MzQyNzAsInN1YiI6ImF1dGgwfDY3OWRhMzc2MjQxNWU1ZGVlNDEwYWJlMSIsInNpZCI6IjJXOHVBZVBhN1F5M2FNNkFvYkNIR2ZZSHZiS0VGS3dLIiwibm9uY2UiOiJaQzVzTGsxaU5ucGFMWGhPVDNkcFlqSnJXV3QzVUVKd1pVMUthRmx4YjJoUVdsVkNlbkpFZW1wcFVBPT0ifQ.srYd1toYePASW-6VX8W918WZyyE9_4nr1Hajpmv8gng8MFSaRL2gBYz2-DE8X1Dv5ZDpP9eHzxEIQRxeNCTv2pyLXgS7eEFxbCl_n9tKwH23msA75CcqpyGIOtBrbtv8xdB91NrV_fcsoWBQcVYd-ZqY5Ps1RcomAPQu4vfpF3r3KcGiv0ReOKdNxPKItX-PyJZ1Yhaa0cLxTxg-ihdQA5Gy1Gub1G5lnlCZBP-O5V7K4x_cjrGMLoTetvcFIfCZwvUhpdHB4KuyLMfKsRf18JtGcJIyyFiUp5q-0pu-qmKYOPfYW12NVC2ApI574wtID9-4Ss6O-LDozUoVqLMKXw'}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting income:', error);
    throw error;
  }
};
