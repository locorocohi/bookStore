import Image from 'next/image';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';
import castlePic from '@/images/castle.svg';
import fairy from '@/images/fairy.svg';

import Banner from '@/components/Banner/Banner';
import Button from '@/components/Button';
import { Catalog } from './styles';

const Main = () => {
  return (
    <Catalog>
      <Banner>
        <div className="content">
          <h1 className="title">Build your library with us</h1>
          <p className="text">Buy two books and get one for free</p>
          <Button className="button">Choose a book</Button>
        </div>
        <Image className="girl-picture" src={girlWithBooks} alt = "Girl with book" />
        <Image className="books-picture" src={booksPic} alt = "Books" />
      </Banner>

      <Banner>
        <Image className="castle-picture" src={castlePic} alt = "Castle" />
        <div className="content">
          <h1 className="title">Authorize now</h1>
          <p className="text">Authorize now and discover the fabulous world of books</p>
          <Button className="button">Log In/ Sing Up</Button>
        </div>
        <Image className="fairy-picture" src={fairy} alt = "Fairy" />
      </Banner>
    </Catalog>
  );
};

export default Main;
