import Image from 'next/image';

import basket from '@/images/Delete.svg';

import { Wrapper } from './styles';

type PropsType = {
  cover: string;
  price: string;
  title: string;
  author: string;
  bookId: number;
};

const FavoriteItem: React.FC<PropsType> = (props) => {
  const { cover, price, title, author, bookId } = props;

  const deleteItemFromFavorite = () => {
    console.log(bookId);
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
          <button
            className="delete-button"
            onClick={deleteItemFromFavorite}
          >
            <Image src={basket} alt="delete" width={20} height={20} />
          </button>
        </div>
        <p className="price">$ {(Number(price)).toFixed(2)} USD</p>
      </div>
    </Wrapper>);
};

export default FavoriteItem;
