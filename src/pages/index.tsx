import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setBooks } from '@/store/bookSlice';
import { getBooks } from '@/api/books';
import { setUser } from '@/store/userSlice';
import { getMe } from '@/api/users';
import { setBooksCount } from '@/store/cartSlice';
import { setToken } from '@/axios/instance';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';
import castlePic from '@/images/castle.svg';
import fairy from '@/images/fairy.svg';

import type { GetServerSideProps } from 'next';
import type { BookType } from '@/models/book';
import type { UserType } from '@/models/user';

import FilterToolbar from '@/components/FilterToolbar/FilterToolbar';
import BooksSection from '@/components/BooksSection/BooksSection';
import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button';
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
      <Banner>
        <>
        <div className="content">
          <h2 className="title">Build your library with us</h2>
          <p className="text">Buy two books and get one for free</p>
          <Button className="button">Choose a book</Button>
        </div>

        <Image className="girl-picture" src={girlWithBooks} alt = "Girl with book" />

        <div className="image-wrapper">
          <Image className="books-picture" src={booksPic} alt = "Books" />
        </div>
        </>
      </Banner>

      <div className="toolbar">
        <h1 className="main title">Catalog</h1>
        <FilterToolbar genres={genres} sortOptions={sortOptions} />
      </div>

      <BooksSection pageCount={pageCount} />

      { !props.data.user
        ? (
        <Banner>
          <>
          <Image className="castle-picture" src={castlePic} alt = "Castle" />

          <div className="content">
            <h2 className="title">Authorize now</h2>
            <p className="text">Authorize now and discover the fabulous world of books</p>
            <Button className="button">Log In/ Sign Up</Button>
          </div>

          <div className="image-wrapper">
            <Image className="fairy-picture" src={fairy} alt = "Fairy" />
          </div>
          </>
        </Banner>)
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

  if (token && user.status === 'fulfilled') {
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
