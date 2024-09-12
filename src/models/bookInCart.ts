import type { BookType } from './book';
import type { CartType } from './cart';

export type BookInCartType = {
  booksCount: number;
  book: BookType;
  cart: CartType;
};
