import Image from 'next/image';
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setBooks } from '@/store/bookSlice';
import { getBooks } from '@/api/books';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';
import castlePic from '@/images/castle.svg';
import fairy from '@/images/fairy.svg';

import type { GetServerSideProps } from 'next';
import type { BookType } from '@/models/book';

import FilterToolbar from '@/components/FilterToolbar/FilterToolbar';
import BooksSection from '@/components/BooksSection/BooksSection';
import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button';
import Pagination from '@/components/Pagination/Pagination';
import { Catalog } from './styles';

type PropsType = {
  data: {
    booksArray: BookType[];
    genres: string [];
    sortOptions: string [];
  };
};

const Main: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();
  const { booksArray, genres, sortOptions } = props.data;

  useEffect(() => {
    dispatch(setBooks(booksArray));

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

      <BooksSection />
      <Pagination />

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
      </Banner>
    </Catalog>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await getBooks(ctx.query);

  return {
    props: { data },
  };
};

export default Main;
