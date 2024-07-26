import passwordCloseEye from '@/images/Hide.svg';
import emailIcon from '@/images/Email.svg';

import type { MouseEventHandler } from 'react';
import Image from 'next/image';
import { StyledForm, FormHint } from './StyledForm';
import Button from '../PrimaryButton';
import PrimaryInput from '../Input';

const AuthForm: React.FC = () => {
  const handler: MouseEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    // console.log(event);
  };

  return (
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
      <Button class="button">Log In</Button>
    </StyledForm>
  );
};

export default AuthForm;
