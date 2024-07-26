import passwordCloseEye from '@/images/passwordEye.png'
import emailIcon from '@/images/Email.png'

import { StyledForm } from './StyledForm';
import { FormHint } from './StyledForm';
import Button from '../PrimaryButton';
import PrimoryInput from '../Input';


export default function Form() {
  return (
    <StyledForm action="">
      <label htmlFor="">
        <PrimoryInput type="email" placeholder="Email" icon={emailIcon} width={413} />
        <FormHint>Enter your email</FormHint>
      </label>
      <label>
        <PrimoryInput type="password" placeholder="Password" icon={passwordCloseEye} width={413} />
        <FormHint>Enter your password</FormHint>
      </label>
      <Button style='button'>Log In</Button>
    </StyledForm>
  );
}
