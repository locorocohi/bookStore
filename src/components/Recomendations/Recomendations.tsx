import type { BookType } from '@/models/book';

import { Wrapper } from './styles';
import Book from '../Book/Book';

type PropsType = {
  books: BookType[];
};

const Recomendations:React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <h2 className="recomendations-title">Recomendations</h2>
      <div className="sample">
        {props.books.map((book) => <Book key={book.id} info={book} />)}
      </div>
    </Wrapper>
  );
};

export default Recomendations;
