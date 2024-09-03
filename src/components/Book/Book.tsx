import Image from 'next/image';
import Link from 'next/link';

import type { BookType } from '@/models/book';
import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';
import { config } from '../../../config';

type PropsType = {
  info: BookType;
};

const Book: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Image height={448} width={305} src={props.info.cover} alt="bookPic" className="book-cover" />
      <div>
        <Link
          href={`http://${config.HOST}:${config.LOCAL_PORT}/product/${props.info.id}`}
          className="product-link"
        >
          <p className="book-name">{props.info.name}</p>
        </Link>
        <p className="author">{props.info.author}</p>
      </div>
      <Rating rating={props.info.rating} />
      <Button>$ {props.info.price} USD</Button>
    </Wrapper>
  );
};

export default Book;
