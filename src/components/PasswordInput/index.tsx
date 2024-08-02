import type { ReactNode } from 'react';
import { useState } from 'react';
import type { IProps as InputProps } from '../Input';
import PrimoryInput from '../Input';
import { Wrapper } from './styles';

interface IProps extends InputProps {
  children: ReactNode [];
}

const PasswordInput: React.FC<IProps> = (props) => {
  const [state, setState] = useState(false);

  const toggleInput = () => {
    setState(!state);
  };

  return (
    <Wrapper>
      <PrimoryInput {...props} type={state ? 'text' : 'password'}>
        <button type="button" onClick={toggleInput}>
          {state ? props.children[1] : props.children[0] }
        </button>
      </PrimoryInput>
    </Wrapper>
  );
};

export default PasswordInput;
