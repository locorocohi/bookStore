import Image from 'next/image';

import passwordCloseEye from '@/images/hide.svg';
import emailIcon from '@/images/email.svg';
import openEye from '@/images/openEye.svg';

import useCustomFormik from '@/hooks/useCustomFormik';
import { saveNewUser } from '@/api/users';
import { signUpSchema as validationSchema } from '@/validationSchemas/signUpForm';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PasswordInput from '@/components/PasswordInput';
import { FormWrapper } from './styles';

const SignUpForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const { user } = await saveNewUser({ email, password });
    return user;
  };

  const { formik, clearInputValue } = useCustomFormik({
    initialValues: {
      email: '',
      password: '',
      repeatedPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailText = formik.errors.email || 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';
  const repeatedPassText = formik.errors.repeatedPassword || 'Repeat your password without errors';

  return (
    <FormWrapper>
      <h1>Sign Up</h1>
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
            filled={!!formik.values.email}
            isError={!!formik.errors.email?.length}
            signature="Email"
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
            filled={!!formik.values.password}
            isError={!!formik.errors.password?.length}
            signature="Password"
          >
            <Image src={passwordCloseEye} alt="eye" priority />
            <Image src={openEye} alt="view" priority />
          </PasswordInput>
        <p>{passText}</p>
        </div>
        <div>
          <PasswordInput
            id="repeatedPassword"
            name="repeatedPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.repeatedPassword}
            clearInputValue={() => clearInputValue('repeatedPassword')}
            filled={!!formik.values.repeatedPassword}
            isError={!!formik.errors.repeatedPassword?.length}
            signature="Password again"
          >
            <Image src={passwordCloseEye} alt="eye" priority />
            <Image src={openEye} alt="view" priority />
          </PasswordInput>
          <p>{repeatedPassText}</p>
        </div>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default SignUpForm;
