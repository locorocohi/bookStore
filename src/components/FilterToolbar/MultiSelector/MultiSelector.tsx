import Image from 'next/image';
import React from 'react';

import disabledCheck from '@/images/Unchecked.svg';
// import activeCheck from '@/images/checked.svg';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';

type PropsType = {
  children?: React.ReactNode;
  filters: string [];
};

const MultiSelector: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>

      <FilterDropdown buttonType="primary" title="Genres">

      {props.filters.map((genre, index) => (

          <li key={index} className="element">
            <input type="checkbox" id={genre} />
            <label htmlFor={genre}>
              <Image src={disabledCheck} alt="Check" className="checkbox" />
              {genre}
            </label>
          </li>

      ))}

      </FilterDropdown>

    </Wrapper>
  );
};

export default MultiSelector;
