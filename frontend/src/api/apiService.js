import { axiosWithAuth } from "../utils/axiosInstance";

export const fetchCategories = async () => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.get("/expense/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const submitExpense = async (expenseData) => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.post("/expense", expenseData);
    return response.data;
  } catch (error) {
    console.error("Error submitting expense:", error);
    throw error;
  }
};

export const fetchIncomeCategories = async () => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.get("/incomes/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching income categories:", error);
    throw error;
  }
};

export const submitIncome = async (incomeData) => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.post("/incomes", incomeData);
    return response.data;
  } catch (error) {
    console.error("Error submitting income:", error);
    throw error;
  }
};

export const fetchExpensesFromAPI = async () => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.get("/expense");
    return response.data;
  } catch (error) {
    console.error("Error fetching income categories:", error);
    throw error;
  }
}

export const fetchIncomeFromAPI = async () => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.get("/incomes");
    return response.data;
  } catch (error) {
    console.error("Error fetching income categories:", error);
    throw error;
  }
}

export const fetchDashboardFromAPI = async (data) => {
  const axiosInstance = axiosWithAuth();
  try {
    const response = await axiosInstance.post("/user/dashboard", data);
    return response.data;
  } catch (error) {
    console.error("Error fetching income categories:", error);
    throw error;
  }
}
