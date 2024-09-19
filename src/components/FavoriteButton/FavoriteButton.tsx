import Image from 'next/image';
import { useState } from 'react';
import { useAppSelector } from '@/store/hooks';
import { addBookToFavorite, removeBookFromFavorite } from '@/api/books';

import favorite from '@/images/Heart.svg';
import filledFavorite from '@/images/filledHeart.svg';

import { Wrapper } from './styles';

type PropsType = {
  pageType: 'catalog' | 'product';
  bookId: number;
};

const FavoriteButton: React.FC<PropsType> = (props) => {
  const favoriteBooks = useAppSelector((store) => store.user.user?.favorites);
  const isSelected = favoriteBooks?.some((book) => book.id === props.bookId);
  const [selected, setSelected] = useState(isSelected);
  const heartSize = props.pageType === 'catalog' ? 26 : 32;

  const addToFavorite = () => {
    addBookToFavorite(props.bookId);
    setSelected(true);
  };

  const removeFromFavorite = () => {
    removeBookFromFavorite(props.bookId);
    setSelected(false);
  };

  return (
    <Wrapper $pageType={props.pageType}>
      {selected
        ? (<button type="button" className="button selected" onClick={removeFromFavorite}>
             <Image src={filledFavorite} alt="heart" width={heartSize} height={heartSize} />
           </button>)

        : (<button type="button" className="button" onClick={addToFavorite}>
             <Image src={favorite} alt="heart" width={heartSize} height={heartSize} />
           </button>)
      }
    </Wrapper>
  );
};

export default FavoriteButton;
