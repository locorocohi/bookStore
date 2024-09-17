import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { addBookInCart } from '@/api/cart';
import type { BookType } from '@/models/book';
import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';
import { config } from '../../../config';

type PropsType = {
  info: BookType;
};

const Book: React.FC<PropsType> = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = async () => {
    await addBookInCart({ bookId: props.info.id });
    setSelected(true);
  };

  return (
    <Wrapper>
      <Image height={448} width={305} src={props.info.cover} alt="bookPic" className="book-cover" />
      <div>
        <Link
          href={`/product/${props.info.id}`}
          className="product-link"
        >
          <p className="book-name">{props.info.name}</p>
        </Link>
        <p className="author">{props.info.author}</p>
      </div>

      <div className="rating-container">
        <Rating rating={props.info.rating} disabled />
        <p className="rating">{Number(props.info.rating).toFixed(1)}</p>
      </div>

      { selected
        ? <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/cart/`} className="selected-item margin-top">Added in cart</Link>
        : (<Button
            className="margin-top"
            disabled={!props.info.available}
            onClick={handleClick}
        >
          $ {props.info.price} USD
           </Button>)
      }
    </Wrapper>
  );
};

export default Book;
