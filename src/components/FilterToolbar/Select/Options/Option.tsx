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
      {props.children}
    </Wrapper>
  );
};

export default Option;
