import Image from 'next/image';
import React, { useState } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import arrowPic from '@/images/Forward.svg';
import blackForward from '@/images/blackForward.svg';

import { Wrapper } from './styles';

type PropsType = {
  children: React.ReactNode;
  buttonType: 'primary' | 'secondary';
  title: string;
};

const FilterDropdown: React.FC<PropsType> = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const ref = useOutsideClick(() => setIsOpen(true));

  const handleListOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper ref={ref}>
      <button
        type="button"
        className={`selected-row ${props.buttonType}`}
        onClick={handleListOpen}
      >
        <span className="dropdown-title">{props.title}</span>
        <div className={`arrow ${isOpen ? 'rotate' : ''}`}>
          { props.buttonType === 'primary' ? <Image src={arrowPic} alt="Arrow" /> : <Image src={blackForward} alt="Arrow" />}
        </div>

      </button>

      { !isOpen && (
        <div className="list">
          <div className="triangle" />
          {props.children}
        </div>)
      }

    </Wrapper>
  );
};

export default FilterDropdown;
