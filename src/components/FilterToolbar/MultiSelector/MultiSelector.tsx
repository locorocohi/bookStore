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

      <ul className="filters">
        {props.filters.map((genre) => (

            <li key={genre} className="element">
              <Checkbox option={genre} />
            </li>

        ))}
      </ul>

      </FilterDropdown>

    </Wrapper>
  );
};

export default MultiSelector;
