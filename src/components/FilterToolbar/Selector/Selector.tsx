import type { MouseEventHandler } from 'react';
import { useState } from 'react';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';

type PropsType = {
  options: string [];
};

const Selector: React.FC<PropsType> = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick: MouseEventHandler = (event) => {
    const currOption = event.target as HTMLLIElement;
    const currValue = String(currOption.textContent).toLowerCase();
    setSelectedOption(currValue);
  };

  return (
    <FilterDropdown title={`Sort by ${selectedOption}`} buttonType="secondary">
      <Wrapper>

        <ul className="sorting">

         {props.options.map((option, index) => (
          <li
            key={index}
            onClick={handleClick}
            className={selectedOption === option.toLowerCase() ? 'option selected' : 'option'}
          >
            {option}
          </li>
         ))}

        </ul>

      </Wrapper>
    </FilterDropdown>
  );
};

export default Selector;
