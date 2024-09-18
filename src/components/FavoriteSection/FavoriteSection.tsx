import { useAppSelector } from '@/store/hooks';
import React from 'react';

import { Wrapper } from '@/components/CartSection/styles';
import Link from 'next/link';
import FavoriteItem from './FavoriteItem/FavoriteItem';

const FavoriteSection = () => {
  const favoriteBooks = useAppSelector((state) => state.user.user?.favorites);
  return (
    <Wrapper>
      { !favoriteBooks
        ? null
        : favoriteBooks.map((book) => {
          const { cover, price, name, author, id } = book;
          return (
            <React.Fragment key={id}>
              <FavoriteItem
                cover={cover}
                price={price}
                title={name}
                author={author}
                bookId={id}
              />
              <hr className="separator" />
            </React.Fragment>
          );
        })}
        <div className="buttons-container">
          <Link href="/"
            className="secondary-button"
          >
          Continue shopping
          </Link>

          <Link href="/cart"
            className="secondary-button"
          >
          Go to Cart
          </Link>
        </div>
    </Wrapper>
  );
};

export default FavoriteSection;
