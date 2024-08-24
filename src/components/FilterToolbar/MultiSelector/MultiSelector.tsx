import React from 'react';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';
import Checkbox from './Checkbox/Checkbox';

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
            <Checkbox genre={genre} />
          </li>

      ))}

      </FilterDropdown>

    </Wrapper>
  );
};

export default MultiSelector;
