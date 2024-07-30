import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import Image from 'next/image';
import { saveNewUser } from '@/api/users';
import { setCookie } from 'cookies-next';
import { useFormik } from 'formik';
import { StyledForm, FormHint, FormWrapper, StyledH1 } from './StyledForm';
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
      <StyledH1>Log In</StyledH1>
      <StyledForm onSubmit={formik.handleSubmit}>
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
          <FormHint>Enter your email</FormHint>
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
          <FormHint>Enter your password</FormHint>
        </label>
        <Button type="submit" className="button">Log In</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default AuthForm;
