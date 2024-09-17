import type { BookType } from './book';

export type UserType = {
  id: number;
  email: string;
  avatar: string;
  name: string;
  favorites: BookType[] | [];
};
