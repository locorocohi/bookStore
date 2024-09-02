import Image from 'next/image';

import type { BookType } from '@/models/book';
import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';

type PropsType = {
  info: BookType;
};

const Book: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Image height={448} width={305} src={props.info.cover} alt="bookPic" className="book-cover" />
      <div>
        <p className="book-name">{props.info.name}</p>
        <p className="author">{props.info.author}</p>
      </div>
      <Rating rating={props.info.rating} />
      <Button>$ {props.info.price} USD</Button>
    </Wrapper>
  );
};

export default Book;
