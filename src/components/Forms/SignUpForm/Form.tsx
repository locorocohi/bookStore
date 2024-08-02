import Image from 'next/image';
import { useFormik } from 'formik';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';
import openEye from '@/images/openEye.svg';

import { saveNewUser } from '@/api/users';
import { signUpSchema as validationSchema } from '@/validationSchemas/signUpForm';
import Button from '@/components/Button';
import Input from '@/components/Input';
import PasswordInput from '@/components/PasswordInput';
import { FormWrapper } from './StyledForm';

const SignUpForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const { user } = await saveNewUser({ email, password });
    return user;
  };

  const clearInputValue = (valueType: string) => {
    formik.setFieldValue(valueType, '');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit,
  });

  // const {values, errors, clearInputValue} = useTest({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //     repeatedPassword: '',
  //   },
  //   validationSchema,
  //   onSubmit,
  // });

  const emailText = formik.errors.email || 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';
  const repeatedPassText = formik.errors.repeatedPassword || 'Repeat your password without errors';

  return (
    <FormWrapper>
      <h1>Sign Up</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            clearInputValue={() => clearInputValue('email')}
          >
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
          </Input>
          <p>{emailText}</p>
        </label>
        <label>
        <PasswordInput
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            clearInputValue={() => clearInputValue('password')}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
            <Image src={openEye} alt="view" priority />
        </PasswordInput>
          <p>{passText}</p>
        </label>
        <label>
          <PasswordInput
            id="repeatedPassword"
            name="repeatedPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.repeatedPassword}
            clearInputValue={() => clearInputValue('repeatedPassword')}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
            <Image src={openEye} alt="view" priority />
          </PasswordInput>
          <p>{repeatedPassText}</p>
        </label>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default SignUpForm;
