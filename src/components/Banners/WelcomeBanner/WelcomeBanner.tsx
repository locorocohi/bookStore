import Image from 'next/image';

import girlWithBooks from '@/images/girlWithBook.svg';
import booksPic from '@/images/twoBooks.svg';

import Button from '@/components/Button';
import { Banner } from './styles';

const WelcomeBanner = () => {
  return (
    <Banner>
      <div className="content">
        <h2 className="title">Build your library with us</h2>
        <p className="text">Buy two books and get one for free</p>
        <Button className="button">Choose a book</Button>
      </div>

      <div className="girl-picture">
        <Image fill src={girlWithBooks} alt = "Girl with book" />
      </div>

      <div className="image-wrapper">
        <Image className="books-picture" src={booksPic} alt = "Books" />
      </div>
    </Banner>
  );
};

export default WelcomeBanner;
