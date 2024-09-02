import Image from 'next/image';
import { useState } from 'react';

import passwordCloseEye from '@/images/hide.svg';
import openEye from '@/images/openEye.svg';

import type { IProps as InputProps } from '../Input';
import PrimoryInput from '../Input';
import { Wrapper } from './styles';

const PasswordInput: React.FC<InputProps> = (props) => {
  const [isHide, setHide] = useState(false);
  const { isError, $isFilled } = props;
  const toggleInput = () => {
    setHide(!isHide);
  };
  const inputStatus = isError ? 'denied' : 'access';
  return (
    <Wrapper className={$isFilled ? inputStatus : ''}>
      <PrimoryInput {...props} type={isHide ? 'text' : 'password'}>
        <button type="button" onClick={toggleInput}>
          {isHide
            ? <Image src={openEye} alt="view" priority />
            : <Image src={passwordCloseEye} alt="eye" priority /> }
        </button>
      </PrimoryInput>
    </Wrapper>
  );
};

export default PasswordInput;
