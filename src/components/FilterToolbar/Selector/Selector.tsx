import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';

import { createQueryString, replaceURLQueryParams } from '@/services/queryStringServices';

import FilterDropdown from '@/components/FilterDropdown/FilterDropdown';
import { Wrapper } from './styles';

type PropsType = {
  options: string [];
};

const Selector: React.FC<PropsType> = (props) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState('price');

  const handleClick: MouseEventHandler = (event) => {
    const currOption = event.target as HTMLLIElement;
    const currValue = String(currOption.textContent).toLowerCase();
    setSelectedOption(currValue);

    const queryString = createQueryString({
      query: router.query,
      key: 'sortOption',
      option: currValue,
    });
    replaceURLQueryParams(router, 'sort', queryString);
  };

  return (
    <FilterDropdown title={`Sort by ${selectedOption}`} buttonType="secondary">
      <Wrapper>

        <ul className="sorting">

         {props.options.map((option) => (
          <li
            key={option}
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
