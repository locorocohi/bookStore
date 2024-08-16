import Image from 'next/image';
import React from 'react';

import disabledCheck from '@/images/Unchecked.svg';
import activeCheck from '@/images/checked.svg';
import arrowPic from '@/images/Forward.svg';
import triangle from '@/images/triangle.svg';

import { Div } from './styles';

type PropsType = {
  children?: React.ReactNode;
  filters: string [];
};

const MultiSelector: React.FC<PropsType> = (props) => {
  return (
    <Div>
      <div className="selected-row">
        <span>Genres</span>
        <div className="arrow"><Image src={arrowPic} alt="Arrow" /></div>
      </div>
      <ul className="list">
        <Image src={triangle} alt="triangle" className="triangle" />
        {props.filters.map((genre, index) => (
          <li key={index} className="element">
            <input type="checkbox" id={genre} />
            <label htmlFor={genre}>
              <Image src={disabledCheck} alt="Check" className="checkbox" />
              {genre}
            </label>
          </li>))}
      </ul>
    </Div>
  );
};

export default MultiSelector;
