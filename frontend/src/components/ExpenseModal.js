import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField, MenuItem, Button, FormHelperText, FormControl, InputLabel, Select, Typography } from '@mui/material';


export default function ExpenseModal(props) {
	const { open, close } = props

	// Validation schema using Yup
  const validationSchema = Yup.object({
    category: Yup.string().required('Category is required'),
    amount: Yup.number().required('Amount is required').typeError('Amount must be a number'),
  });
  
  const categories = ['Food', 'Transport', 'Utilities', 'Entertainment'];


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
						console.log('Form data', values);
						setSubmitting(false);
					}}
				>
					{({ errors, touched, handleChange, handleBlur, values }) => (
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
									error={touched.category && Boolean(errors.category)}
								>
									{categories.map((category) => (
										<MenuItem key={category} value={category}>
											{category}
										</MenuItem>
									))}
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

							<Button color="primary" variant="contained" type="submit" fullWidth>
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</Box>
		</Modal>	
	)
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