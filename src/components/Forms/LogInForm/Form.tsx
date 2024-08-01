import { useFormik } from 'formik';
import Image from 'next/image';

import { logInSchema as validationSchema } from '@/validationSchemas/logInForm';

import { saveNewUser } from '@/api/users';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';

import { FormWrapper } from '../SignUpForm/StyledForm';
import Button from '../../Button';
import Input from '../../Input';

const LogInForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const user = await saveNewUser({ email, password });
    return user;
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

  const emailText = formik.errors.email || 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';

  return (
    <FormWrapper>
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          >
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
          </Input>
          <p>{emailText}</p>
        </label>
        <label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
          </Input>
          <p>{passText}</p>
        </label>
        <Button type="submit">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default LogInForm;
