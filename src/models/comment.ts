import type { UserType } from './user';

export type CommentType = {
  id: number;
  text: string;
  creationTime: string;
  author: UserType;
};
