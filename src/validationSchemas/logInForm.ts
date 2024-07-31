import * as yup from 'yup';

export const logInSchema = yup.object({
  email: yup.string()
    .email()
    .required('Email is required'),

  password: yup.string()
    .required('Password is required')
    .min(4, 'Password is too short - should be minimum 4 chars'),
});
