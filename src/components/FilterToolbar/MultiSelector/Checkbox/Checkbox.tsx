import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { createQueryString, replaceURLQueryParams } from '@/services/queryStringServices';

import disabledCheck from '@/images/Unchecked.svg';
import activeCheck from '@/images/checked.svg';
import { Wrapper } from './styles';

type PropsType = {
  genre: string;
};

const getInitState = (options: {genres: string | string[]; genre: string}) => {
  const { genre, genres } = options;
  return genres.includes(genre);
};

const Checkbox:React.FC<PropsType> = (props) => {
  const router = useRouter();

  const [isChecked, setChecked] = useState(getInitState({
    genre: props.genre,
    genres: router.query.genre ?? '',
  }));

  const toggleFilter = () => {
    setChecked(!isChecked);
    const queryString = createQueryString({
      query: router.query,
      key: 'genre',
      option: props.genre,
      isChecked,
    });
    replaceURLQueryParams(router, 'genre', queryString);
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
