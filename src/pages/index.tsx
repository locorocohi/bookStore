import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setBooks } from '@/store/bookSlice';
import { getBooks } from '@/api/books';
import { setUser } from '@/store/userSlice';
import { getMe } from '@/api/users';
import { setBooksCount } from '@/store/cartSlice';
import { setToken } from '@/axios/instance';

import type { GetServerSideProps } from 'next';
import type { BookType } from '@/models/book';
import type { UserType } from '@/models/user';

import FilterToolbar from '@/components/FilterToolbar/FilterToolbar';
import BooksSection from '@/components/BooksSection/BooksSection';
import AuthBanner from '@/components/Banners/AuthBanner/AuthBanner';
import WelcomeBanner from '@/components/Banners/WelcomeBanner/WelcomeBanner';
import { Catalog } from './styles';

type PropsType = {
  data: {
    user?: {findedUser: UserType; booksInCartCount: number};
    books: {
      booksArray: BookType[];
      genres: string [];
      sortOptions: string [];
      pageCount: number;
    };
  };
};

const Main: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const { booksArray, genres, sortOptions, pageCount } = props.data.books;

  useEffect(() => {
    dispatch(setBooks(booksArray));
    if (props.data.user) {
      dispatch(setUser(props.data.user.findedUser));
      dispatch(setBooksCount(props.data.user.booksInCartCount));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Catalog>
      <WelcomeBanner />

      <div className="toolbar">
        <h1 className="main title">Catalog</h1>
        <FilterToolbar genres={genres} sortOptions={sortOptions} />
      </div>

      <BooksSection pageCount={pageCount} />

      { !props.data.user
        ? <AuthBanner />
        : null
      }
    </Catalog>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.accessToken;
  setToken(token);

  const [user, books] = await Promise.allSettled([getMe(), getBooks(ctx.query)]);

  const data = { user: null, books: null };

  if (user.value) {
    data.user = user.value;
  }

  if (books.status === 'fulfilled') {
    data.books = books.value;
  }

  return {
    props: { data },
  };
};

export default Main;
