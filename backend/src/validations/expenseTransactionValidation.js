// validations/expenseTransactionValidation.js
import * as Yup from 'yup';

export const expenseTransactionSchema = Yup.object().shape({
  expense_category_id: Yup.number().required('Expense category ID is required'),
  amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
  date: Yup.date().required('Date is required'),
});

export const expenseTransactionUpdateSchema = Yup.object().shape({
  expense_category_id: Yup.number()
    .optional()
    .test('at-least-one', 'At least one field must be provided', function (value) {
      const { amount, date } = this.parent;
      return value !== undefined || amount !== undefined || date !== undefined;
    }),
  amount: Yup.number()
    .optional()
    .positive('Amount must be positive')
    .test('at-least-one', 'At least one field must be provided', function (value) {
      const { expense_category_id, date } = this.parent;
      return value !== undefined || expense_category_id !== undefined || date !== undefined;
    }),
  date: Yup.date()
    .optional()
    .test('at-least-one', 'At least one field must be provided', function (value) {
      const { expense_category_id, amount } = this.parent;
      return value !== undefined || expense_category_id !== undefined || amount !== undefined;
    }),
});
