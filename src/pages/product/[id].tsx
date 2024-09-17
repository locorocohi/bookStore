import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';
import { useAppDispatch } from '@/store/hooks';

import { setSingleBook } from '@/store/singleBookSlice';
import { setComments } from '@/store/singleBookSlice';
import { getBookById } from '@/api/books';
import type { UserType } from '@/models/user';
import type { BookType } from '@/models/book';
import type { CommentType } from '@/models/comment';
import { setToken } from '@/axios/instance';
import { getMe } from '@/api/users';
import { setUser } from '@/store/userSlice';

import Recomendations from '@/components/Recomendations/Recomendations';
import ProductInfo from '@/components/ProductInfo/ProductInfo';
import Comments from '@/components/Comments/CommentsSection';
import { Wrapper } from './styles';

type PropsType = {
  data: {
    user: UserType;
    books: { findedBook: BookType; recommendedBooks: BookType[]; findedComments: CommentType[] };
  };
};

const ProductPage = (props: PropsType) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSingleBook(props.data.books.findedBook));
    dispatch(setComments(props.data.books.findedComments));
    dispatch(setUser(props.data.user));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <ProductInfo />
      <Comments />
      { props.data.books.recommendedBooks.length > 0
        ? <Recomendations books={props.data.books.recommendedBooks} />
        : null
      }
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);

  const params = ctx.params as {id: string};
  const [user, books] = await Promise.allSettled([getMe(), getBookById(params.id)]);
  const data = { user: null, books: null };
  if (user.status === 'fulfilled') {
    data.user = user.value;
  }
  if (books.status === 'fulfilled') {
    data.books = books.value;
  }

  return {
    props: { data },
  };
};

export default ProductPage;
