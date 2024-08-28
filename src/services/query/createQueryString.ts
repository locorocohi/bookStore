export interface IFilter {
  genres?: string [];
  sortOption?: string;
  minPrice?: string;
  maxPrice?: string;
}

// export const createQueryString = (filter: IFilter) => {
//   return new URLSearchParams(filter).toString();
// };
