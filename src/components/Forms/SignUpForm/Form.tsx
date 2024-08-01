import Image from 'next/image';
import { useFormik } from 'formik';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';

import { saveNewUser } from '@/api/users';
import { signUpSchema as validationSchema } from '@/validationSchemas/signUpForm';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { FormWrapper } from './StyledForm';

const SignUpForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const { user } = await saveNewUser({ email, password });
    return user;
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
        <label>
          <Input
            id="repeatedPassword"
            name="repeatedPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.repeatedPassword}
          >
            <Image src={passwordCloseEye} alt="eye" priority />
          </Input>
          <p>{repeatedPassText}</p>
        </label>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default SignUpForm;
