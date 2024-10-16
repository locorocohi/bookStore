import Image from 'next/image';

import backArrow from '@/images/Back Arrow.svg';

import { useAppSelector } from '@/store/hooks';
import { Wrapper } from './styles';
import Rating from '../Rating/Rating';
import Button from '../Button';

const ProductInfo = () => {
  const book = useAppSelector((state) => state.book.books[0]);
  const { cover, name, author, rating, description, price } = book;
  return (
    <Wrapper>
      <Image src={cover} alt="Cover" height={779} width={522} />

      <div className="info">

        <div>
          <h1 className="title">{name}</h1>
          <h2 className="description">{author}</h2>
        </div>

        <div className="rating-container">
          <div className="star-wrapper">
            <div className="star-pic" />
            <p className="rating">{Number(rating).toFixed(1)}</p>
          </div>

          <Rating />

          <div className="hint">
            <Image src={backArrow} alt="arrow" width={24} height={24} />
            <p className="rating">Rate this book</p>
          </div>
        </div>

        <div>
          <h2 className="description">Description</h2>
          <p className="description-content">{description}</p>
        </div>

        <div className="buttons-container">
          <div className="button-label">
            <p className="description-content">Paperback</p>
            <Button disabled>Not available</Button>
          </div>
          <div className="button-label">
            <p className="description-content">Hardcover</p>
            <Button>{`$${price} USD`}</Button>
          </div>
        </div>

      </div>
    </Wrapper>
  );
};

export default ProductInfo;
