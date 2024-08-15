import Image from 'next/image';

import bookPic from '@/images/bookPic.svg';

import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';

const Book = () => {
  return (
    <Wrapper>
      <Image src={bookPic} alt="bookPic" />
      <div>
        <p>The Chronicles of Narnia</p>
        <p>C. S. Lewis</p>
      </div>
      <Rating />
      <Button>$14.99 USD</Button>
    </Wrapper>
  );
};

export default Book;
