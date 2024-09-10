import Image from 'next/image';
import { useState } from 'react';

import cover from '@/images/unsplash_aZ_MmSmAcjg.svg';
import basket from '@/images/Delete.svg';

import { Wrapper } from './styles';

const CartItem = () => {
  const [count, setCount] = useState(1);
  const handleClickIncrease = () => {
    setCount(count + 1);
  };

  const handleClickDecrease = () => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <Wrapper>
      <div className="book-cover">
        <Image src={cover} alt="cover" width={197} height={289} />
      </div>
      <div className="book-info">
        <div className="content">
          <p className="title">The Weight of Things</p>
          <p className="author">Marianne Flitz</p>
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
          <button className="delete-button"><Image src={basket} alt="delete" width={20} height={20} /> </button>
        </div>
        <p className="price">$ 19.99 USD</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
