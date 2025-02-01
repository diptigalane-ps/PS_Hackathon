import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, MenuItem, Button, FormHelperText, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { fetchCategories, submitExpense } from '../api/apiService';

export default function ExpenseModal(props) {
  const { open, close } = props;
  const { getIdTokenClaims } = useAuth0();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories when dropdown is opened
  const handleCategoryOpen = async () => {
    if (categories.length === 0) {
      setLoading(true);
      try {
        const idTokenClaims = await getIdTokenClaims();
        const idToken = idTokenClaims?.__raw;
        const data = await fetchCategories(idToken);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
      } finally {
        setLoading(false);
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
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const idTokenClaims = await getIdTokenClaims();
              const idToken = idTokenClaims?.__raw;

              const expenseData = {
                expense_category_id: values.category,
                amount: values.amount,
                date: new Date().toISOString().split('T')[0],
              };

              await submitExpense(expenseData, idToken);
              console.log('Expense submitted successfully');
              close();
            } catch (error) {
              console.error('Error submitting expense:', error);
            } finally {
              setSubmitting(false);
            }
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
                  onOpen={handleCategoryOpen}
                  error={touched.category && Boolean(errors.category)}
                  label="Category"
                  sx={{ minWidth: 200 }}
                >
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
