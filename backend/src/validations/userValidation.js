// validations/userValidation.js
import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  gender: Yup.string().oneOf(['Male', 'Female', 'Other'], 'Invalid gender'),
  dob: Yup.date().required('Date of birth is required'),
  email_id: Yup.string().email('Invalid email format').required('Email is required'),
  phone_no: Yup.string().matches(/^\d{10,15}$/, 'Invalid phone number'),
  marital_status: Yup.string(),
  address: Yup.string(),
  created_by: Yup.number().integer(),
});
