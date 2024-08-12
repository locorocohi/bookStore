import * as yup from 'yup';

export const changeSchema = yup.object({
  name: yup.string(),

  email: yup.string()
    .email()
    .required('Email is required'),
});
