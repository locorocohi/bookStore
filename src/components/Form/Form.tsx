import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import { useState, type MouseEventHandler } from 'react';
import Image from 'next/image';
import { saveNewUser } from '@/api/users';
import { setCookie } from 'cookies-next';
import { StyledForm, FormHint, FormWrapper, StyledH1 } from './StyledForm';
import Button from '../PrimaryButton';
import PrimaryInput from '../Input';

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler: MouseEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const userData = {
      email,
      password,
    };
    const { accessToken, user } = await saveNewUser(userData);
    setCookie('accessToken', accessToken);
    return user;
  };

  return (
    <FormWrapper>
      <StyledH1>Log In</StyledH1>
      <StyledForm onSubmit={submitHandler}>
        <label htmlFor="">
          <PrimaryInput type="email" placeholder="Email" onChange={(event) => setEmail(event.currentTarget.value)}>
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
          </PrimaryInput>
          <FormHint>Enter your email</FormHint>
        </label>
        <label>
          <PrimaryInput type="password" placeholder="Password" onChange={(event) => setPassword(event.currentTarget.value)}>
            <Image src={passwordCloseEye} alt="eye" priority />
          </PrimaryInput>
          <FormHint>Enter your password</FormHint>
        </label>
        <Button type="submit" className="button">Log In</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default AuthForm;
