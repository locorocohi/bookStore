import { useFormik } from 'formik';
import Image from 'next/image';

import { logInSchema as validationSchema } from '@/validationSchemas/logInForm';

import { saveNewUser } from '@/api/users';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';
import openEye from '@/images/openEye.svg';

import PasswordInput from '@/components/PasswordInput';
import { FormWrapper } from '../SignUpForm/StyledForm';
import Button from '../../Button';
import Input from '../../Input';

const LogInForm: React.FC = () => {
  const onSubmit = async (options: {email: string; password:string }) => {
    const { email, password } = options;
    const user = await saveNewUser({ email, password });
    return user;
  };

  const clearInputValue = (valueType: string) => {
    formik.setFieldValue(valueType, '');
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit,
  });

  // const {values, errors, clearInputValue} = useTest({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema,
  //   onSubmit,
  // });

  const emailText = formik.errors.email || 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';

  return (
    <FormWrapper>
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
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
        <div>
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
        </div>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default LogInForm;
