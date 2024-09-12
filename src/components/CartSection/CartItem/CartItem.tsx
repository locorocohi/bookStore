import Image from 'next/image';
import { useState } from 'react';

import basket from '@/images/Delete.svg';

import { Wrapper } from './styles';

type PropsType = {
  booksCount: number;
  cover: string;
  price: string;
  title: string;
  author: string;
};

const CartItem: React.FC<PropsType> = (props) => {
  const { cover, price, title, author, booksCount } = props;

  const [count, setCount] = useState(booksCount);
  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  };

  const deleteItemFromCart = () => {
    setCount(0);
  };

  return (
    <Wrapper>
      <div className="book-cover">
        <Image src={cover} alt="cover" width={197} height={289} />
      </div>
      <div className="book-info">
        <div className="content">
          <p className="title">{title}</p>
          <p className="author">{author}</p>
        </div>
        <div className="toolbar">
          <div className="counter">
            <button
              className="counter-button"
              onClick={handleClickDecrease}
            >-
            </button>
            <p className="count">{count}</p>
            <button
              className="counter-button"
              onClick={handleClickIncrease}
            >+
            </button>
          </div>
          <button
            className="delete-button"
            onClick={deleteItemFromCart}
          >
            <Image src={basket} alt="delete" width={20} height={20} />
          </button>
        </div>
        <p className="price">$ {(Number(price) * count).toFixed(2)} USD</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
