import * as yup from 'yup';

export const changePasswordSchema = yup.object({
  password: yup.string()
    .required('Password is required'),

  secondPassword: yup.string()
    .required('Сreate a new password')
    .min(4, 'Password is too short - should be minimum 4 chars '),
});
