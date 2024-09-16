import type { NextRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

type KeysType = 'genre' | 'sortOption' | 'minPrice' | 'maxPrice' | 'page' | 'search';

type OptionsType = {
  query: ParsedUrlQuery;
  key: KeysType;
  option: string;
  isChecked?: boolean;
};

const createQueryString = (options: OptionsType) => {
  const { query, key, option, isChecked } = options;

  if (key === 'genre') {
    const prevQueryParams = query[key] ?? '';

    if (Array.isArray(prevQueryParams)) {
      return '';
    }

    const arrayQueryParams = prevQueryParams.length ? prevQueryParams.split(',') : [];

    if (!isChecked) {
      arrayQueryParams.push(option);
      const newQueryString = arrayQueryParams.join();
      return newQueryString;
    }
    const filteredParams = arrayQueryParams.filter((item) => item !== option);
    const newQueryString = filteredParams.join();
    return newQueryString;
  }
  return option;
};

const replaceURLQueryParams = (router: NextRouter, key: string, queryString: string) => {
  router.push({
    query: {
      ...router.query,
      page: '1',
      [key]: queryString,
    },
  }, '', {
    scroll: false,
  });
};

export { createQueryString, replaceURLQueryParams };
