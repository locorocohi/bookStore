import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import type { MouseEventHandler } from 'react';
import Image from 'next/image';
import { StyledForm, FormHint, FormWrapper, StyledH1 } from './StyledForm';
import Button from '../PrimaryButton';
import PrimaryInput from '../Input';

const AuthForm: React.FC = () => {
  const handler: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <FormWrapper>
      <StyledH1>Log In</StyledH1>
      <StyledForm onSubmit={handler}>
        <label htmlFor="">
          <PrimaryInput type="email" placeholder="Email">
            <Image src={emailIcon} alt="email"
            width={24} height={24}
             />
          </PrimaryInput>
          <FormHint>Enter your email</FormHint>
        </label>
        <label>
          <PrimaryInput type="password" placeholder="Password">
            <Image src={passwordCloseEye} alt="eye" priority />
          </PrimaryInput>
          <FormHint>Enter your password</FormHint>
        </label>
        <Button className="button">Log In</Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default AuthForm;
