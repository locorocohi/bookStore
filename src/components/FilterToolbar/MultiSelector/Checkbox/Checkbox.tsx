import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { buildQueryString, replaceURLQueryParams } from '@/services/query/queryStringServices';

import disabledCheck from '@/images/Unchecked.svg';
import activeCheck from '@/images/checked.svg';
import { Wrapper } from './styles';

type PropsType = {
  option: string;
};

const getInitState = (options: {genres: string | string[]; genre: string}) => {
  const { genre, genres } = options;
  return genres.includes(genre);
};

const Checkbox:React.FC<PropsType> = (props) => {
  const router = useRouter();

  const [isChecked, setChecked] = useState(getInitState({
    genre: props.option,
    genres: router.query.genres ?? '',
  }));

  const toggleFilter = () => {
    setChecked(!isChecked);
    const queryString = buildQueryString(router, 'genres', props.option, isChecked);
    replaceURLQueryParams(router, 'genres', queryString);
  };

  return (
    <Wrapper>
      <input type="checkbox" id={props.option} onChange={toggleFilter} className="hidden-checkbox" />
      <label htmlFor={props.option}>
        {isChecked
          ? <Image src={activeCheck} alt="Check" className="checkbox" />
          : <Image src={disabledCheck} alt="Check" className="checkbox" />
        }
        {props.option}
      </label>
    </Wrapper>
  );
};

export default Checkbox;
