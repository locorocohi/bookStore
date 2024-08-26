import Image from 'next/image';
import React, { useState } from 'react';

import disabledCheck from '@/images/Unchecked.svg';
import activeCheck from '@/images/checked.svg';
import { Wrapper } from './styles';

type PropsType = {
  genre: string;
};

const Checkbox:React.FC<PropsType> = (props) => {
  const [isChecked, setChecked] = useState(false);

  const toggleFilter = () => {
    setChecked(!isChecked);
  };

  return (
    <Wrapper>
      <input type="checkbox" id={props.genre} onChange={toggleFilter} className="hidden-checkbox" />
      <label htmlFor={props.genre}>
        {isChecked
          ? <Image src={activeCheck} alt="Check" className="checkbox" />
          : <Image src={disabledCheck} alt="Check" className="checkbox" />
        }
        {props.genre}
      </label>
    </Wrapper>
  );
};

export default Checkbox;
