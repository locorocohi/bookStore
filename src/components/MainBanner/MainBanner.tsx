import Image from 'next/image';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';
import { Wrapper } from './styles';
import Button from '../Button';

const MainBanner = () => {
  return (
    <Wrapper>
      <div className="content">
        <h1 className="title">Build your library with us</h1>
        <p className="text">Buy two books and get one for free</p>
        <Button className="button">Choose a book</Button>
      </div>
      <Image className="books-picture" src={booksPic} alt = "Books" />
      <Image className="girl-picture" src={girlWithBooks} alt = "Girl with book" />
    </Wrapper>
  );
};

export default MainBanner;
