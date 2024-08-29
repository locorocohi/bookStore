import type { NextRouter } from 'next/router';

type KeysType = 'genre' | 'sortOption' | 'minPrice' | 'maxPrice';

const buildQueryString = (
  router: NextRouter,
  key: KeysType,
  option: string,
  isChecked?: boolean,
) => {
  if (key === 'genre') {
    const prevQueryParams = router.query[key] ?? '';

    if (Array.isArray(prevQueryParams)) {
      return '';
    }

    const arrayQueryParams = prevQueryParams.length ? prevQueryParams.split(',') : [];

    if (!isChecked && typeof isChecked === 'boolean') {
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
      [key]: queryString,
    },
  }, '', {
    scroll: false,
  });
};

export { buildQueryString, replaceURLQueryParams };
