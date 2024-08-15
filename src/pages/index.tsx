import Image from 'next/image';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';
import castlePic from '@/images/castle.svg';
import fairy from '@/images/fairy.svg';

import FilterToolbar from '@/components/FilterToolbar/FilterToolbar';
import BooksSection from '@/components/BooksSection/BooksSection';
import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button';
import { Catalog } from './styles';

const Main = () => {
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

      <FilterToolbar />

      <BooksSection />

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

export default Main;
