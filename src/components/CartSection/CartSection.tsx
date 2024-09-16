import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import React from 'react';

import CartItem from './CartItem/CartItem';
import { Wrapper } from './styles';
import { config } from '../../../config';
import Button from '../Button';

const CartSection = () => {
  const booksInCart = useAppSelector((state) => state.cart.booksInCart);
  const total = useAppSelector((state) => state.cart.total);
  return (
    <Wrapper>
      {booksInCart.map((bookInCart, index) => {
        const { book, booksCount } = bookInCart;
        const { cover, price, name, author } = book;
        return (
          <React.Fragment key={index}>
            <CartItem
              booksCount={booksCount}
              cover={cover}
              price={price}
              title={name}
              author={author}
              bookId={bookInCart.book.id}
            />
            <hr className="separator" />
          </React.Fragment>);
      })}
      <p className="total">Total: <span className="total-price">{total.toFixed(2)}</span></p>
      <div className="buttons-container">
        <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/`}
          className="secondary-button"
        >
          Continue shopping
        </Link>

        <Button>Checkout</Button>
      </div>
    </Wrapper>
  );
};

export default CartSection;
