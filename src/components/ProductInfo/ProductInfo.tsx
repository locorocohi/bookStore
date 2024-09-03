import Image from 'next/image';

import type { BookType } from '@/models/book';

import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';

type PropsType = {
  book: BookType;
};

const ProductInfo = (props: PropsType) => {
  const { cover, name, author, rating, description, price } = props.book;
  return (
    <Wrapper>
      <Image src={cover} alt="Cover" height={779} width={522} />

      <div className="info">
        <h1>{name}</h1>
        <h2>{author}</h2>

        <div>
          <Rating />
          <span>Rate this book</span>
        </div>

        <div className="description">
          <h2>Description</h2>
          <p className="description-content">{description}</p>
        </div>

        <div className="buttons-container">
          <div>
            <p className="description-content">Paperback</p>
            <Button disabled>Not available</Button>
          </div>
          <div>
            <p className="description-content">Hardcover</p>
            <Button>{`$${price} USD`}</Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductInfo;
