import Image from 'next/image';
import { useRouter } from 'next/router';

import { logInSchema as validationSchema } from '@/validationSchemas/logInForm';

import useCustomFormik from '@/hooks/useCustomFormik';
import { logIn } from '@/api/users';

import emailIcon from '@/images/email.svg';

import PasswordInput from '@/components/PasswordInput';
import { FormWrapper } from '../SignUpForm/styles';
import Button from '../../Button';
import Input from '../../Input';
import { config } from '../../../../config';

const LogInForm: React.FC = () => {
  const router = useRouter();

  const onSubmit = async (options: { email: string; password: string }) => {
    const { email, password } = options;
    await logIn({ email, password });
    router.push(new URL(`http://${config.HOST}:${config.LOCAL_PORT}/profile`));
  };

  const { formik, clearInputValue } = useCustomFormik<{
    email: string;
    password: string;
  }>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailText =
    formik.values.email?.length && formik.errors.email?.length
      ? formik.errors.email
      : 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';

  return (
    <FormWrapper>
      <h1>Log In</h1>
      <form onSubmit={formik.handleSubmit} className="width-413">
        <label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            clearInputValue={() => clearInputValue('email')}
            $isFilled={!!formik.values.email}
            isError={!!formik.errors.email?.length}
            signature="Email"
          >
            <Image src={emailIcon} alt="email" width={24} height={24} />
          </Input>
          <p className="hint">{emailText}</p>
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
            $isFilled={!!formik.values.password}
            isError={!!formik.errors.password?.length}
            signature="Password"
          />
          <p className="hint">{passText}</p>
        </div>
        <Button type="submit" className="button">
          Log In
        </Button>
      </form>
    </FormWrapper>
  );
};

export default LogInForm;
