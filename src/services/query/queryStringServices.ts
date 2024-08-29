import type { NextRouter } from 'next/router';

export interface IFilter {
  genres?: string [];
  sortOption?: string;
  minPrice?: string;
  maxPrice?: string;
}

const buildQueryString = (router: NextRouter, key: string, option: string, isChecked: boolean) => {
  const prevQueryParams = router.query[key] as string ?? '';
  const arrayQueryParams = prevQueryParams.length ? prevQueryParams.split(',') : [];

  if (!isChecked && typeof isChecked === 'boolean') {
    arrayQueryParams.push(option);
    const newQueryString = arrayQueryParams.join();
    return newQueryString;
  }
  const filteredParams = arrayQueryParams.filter((item) => item !== option);
  const newQueryString = filteredParams.join();
  return newQueryString;
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
