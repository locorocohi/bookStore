import { useAppSelector } from '@/store/hooks';

import { Wrapper } from './styles';
import Book from '../Book/Book';

const BooksSection: React.FC = () => {
  const books = useAppSelector((store) => store.book.books);

  return (
    <Wrapper>
      { books ? books.map((book, idx) => (<Book info={book} key={idx} />)) : null}
    </Wrapper>
  );
};

export default BooksSection;
