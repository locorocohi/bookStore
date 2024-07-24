import styled from 'styled-components';
import Button from './Button';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const FormHint = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.75px;
text-align: left;
color: rgba(52, 73, 102, 1);
`;

const StyledInput = styled.input`
width: 100%;
height: 64px;
background-color: rgba(240, 244, 239, 1);
border: none;
border-radius: 16px;
padding-left: 70px;
`;

export default function Form() {
  return (
    <StyledForm action="">
      <label htmlFor="">
        <StyledInput type="email" placeholder="Email" />
        <FormHint>Enter your email</FormHint>
      </label>
      <label>
        <StyledInput type="password" placeholder="Password" />
        <FormHint>Enter your password</FormHint>
      </label>
      <Button />
    </StyledForm>
  );
}
