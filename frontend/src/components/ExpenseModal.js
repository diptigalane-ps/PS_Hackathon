import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, MenuItem, Button, FormHelperText, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { fetchCategories, submitExpense } from '../api/apiService';

export default function ExpenseModal(props) {
  const { open, close } = props;

  // State for categories and loading state
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories when dropdown is opened
  const handleCategoryOpen = async () => {
    if (categories.length === 0) { // Only fetch if categories are empty
      setLoading(true);
      try {
        const data = await fetchCategories(); // Fetch categories
        setCategories(data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false); // Stop loading indicator
      }
    }
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    category: Yup.string().required('Category is required'),
    amount: Yup.number().required('Amount is required').typeError('Amount must be a number'),
  });

  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>Expense</Typography>
        <Formik
          initialValues={{ category: '', amount: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            const expenseData = {
              expense_category_id: values.category,
              amount: values.amount,
              date: new Date().toISOString().split('T')[0], // today's date
            };

            submitExpense(expenseData)
              .then(response => {
                console.log('Expense submitted successfully:', response);
                setSubmitting(false);
                close(); // Close the modal after successful submission
              })
              .catch(error => {
                console.error('Error submitting expense:', error);
                setSubmitting(false);
              });
          }}
        >
          {({ errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
            <Form>
              <FormControl fullWidth margin="normal">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  name="category"
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onOpen={handleCategoryOpen}  // Fetch categories when dropdown is opened
                  error={touched.category && Boolean(errors.category)}
                >
                  {/* Display loading indicator or dropdown items */}
                  {loading ? (
                    <MenuItem disabled>Loading...</MenuItem>
                  ) : (
                    categories.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.name}
                      </MenuItem>
                    ))
                  )}
                </Select>
                {touched.category && errors.category && (
                  <FormHelperText error>{errors.category}</FormHelperText>
                )}
              </FormControl>

              <Field
                as={TextField}
                fullWidth
                margin="normal"
                id="amount"
                name="amount"
                label="Amount"
                type="number"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.amount && Boolean(errors.amount)}
                helperText={touched.amount && errors.amount}
              />

              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
