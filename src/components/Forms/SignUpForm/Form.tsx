import Image from 'next/image';
import { useRouter } from 'next/router';

import emailIcon from '@/images/email.svg';

import useCustomFormik from '@/hooks/useCustomFormik';
import { saveNewUser } from '@/api/users';
import { signUpSchema as validationSchema } from '@/validationSchemas/signUpForm';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PasswordInput from '@/components/PasswordInput';
import { config } from '../../../../config';
import { FormWrapper } from './styles';

const SignUpForm: React.FC = () => {
  const router = useRouter();

  const onSubmit = async (options: {email: string; password:string ; secondPassword: string}) => {
    const { email, password } = options;
    await saveNewUser({ email, password });
    router.push(new URL(`http://${config.HOST}:${config.LOCAL_PORT}/profile`));
  };

  const { formik, clearInputValue } = useCustomFormik<{
    email: string;
    password: string;
    secondPassword: string;
  }>({
    initialValues: {
      email: '',
      password: '',
      secondPassword: '',
    },
    validationSchema,
    onSubmit,
  });

  const emailText = formik.errors.email || 'Enter your email';
  const passText = formik.errors.password || 'Enter your password';
  const repeatedPassText = formik.errors.secondPassword || 'Repeat your password without errors';

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
            $isFilled={!!formik.values.email}
            isError={!!formik.errors.email?.length}
            signature="Email"
          >
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
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
        <div>
          <PasswordInput
            id="secondPassword"
            name="secondPassword"
            type="password"
            placeholder="Password replay"
            onChange={formik.handleChange}
            value={formik.values.secondPassword}
            clearInputValue={() => clearInputValue('secondPassword')}
            $isFilled={!!formik.values.secondPassword}
            isError={!!formik.errors.secondPassword?.length}
            signature="Password again"
          />
          <p className="hint">{repeatedPassText}</p>
        </div>
        <Button type="submit" className="button">Sign Up</Button>
      </form>
    </FormWrapper>
  );
};

export default SignUpForm;
