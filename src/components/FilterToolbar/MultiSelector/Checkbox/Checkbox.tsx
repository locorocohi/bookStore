import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

  const createNewURL = (filter: string) => {
    // const origin = `http://${config.HOST}:${config.LOCAL_PORT}/`;
    const prevQueryParams: string = router.query ? router.query[filter] : '';

    const ArrayQueryParams = prevQueryParams.length ? prevQueryParams.split(',') : [];
    let newURL;

    if (isChecked) {
      ArrayQueryParams.push(props.genre);
      ArrayQueryParams.join(',');
      newURL = `/?${filter}=${ArrayQueryParams}`;
    } else {
      const filteredParams = ArrayQueryParams.filter((item) => item !== props.genre).join(',');
      newURL = `/?${filter}=${filteredParams}`;
    }

    router.push(newURL, '', {
      scroll: false,
    });
  };

  const [isChecked, setChecked] = useState(getInitState({
    genre: props.genre,
    genres: router.query.genres ?? '',
  }));

  useEffect(() => {
    createNewURL('genres');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

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
