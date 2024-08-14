// import Image from 'next/image';
import React from 'react';

// import checked from '@/images/checked.svg';
import { Wrapper } from './styles';

type PropsType = {
  children: React.ReactNode;
};

const Option: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      {/* <Image className="checkbox-size" src={checked} alt="Checkbox" /> */}
      <span className="option-text">{props.children}</span>
    </Wrapper>
  );
};

export default Option;
