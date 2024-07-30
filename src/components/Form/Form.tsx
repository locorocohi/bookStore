import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import Image from 'next/image';
import { saveNewUser } from '@/api/users';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import { FormWrapper } from './StyledForm';
import Button from '../Button';
import Input from '../Input';

const AuthForm: React.FC = () => {
  const onSubmit = async ({ email, password }:{email: string; password:string }) => {
    const { accessToken, user } = await saveNewUser({ email, password });
    setCookie('accessToken', accessToken);
    return user;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

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
          <p>Enter your email</p>
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
          <p>Enter your password</p>
        </label>
        <Button type="submit" className="button">Log In</Button>
      </form>
    </FormWrapper>
  );
};

export default AuthForm;
