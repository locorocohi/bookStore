import { useAppSelector } from '@/store/hooks';
import React from 'react';

import { Wrapper } from '@/components/CartSection/styles';
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
            <FavoriteItem
              key={id}
              cover={cover}
              price={price}
              title={name}
              author={author}
              bookId={id}
            />);
        })}
    </Wrapper>
  );
};

export default FavoriteSection;
