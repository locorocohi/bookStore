import ReactPaginate from 'react-paginate';
import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';

import { createQueryString, replaceURLQueryParams } from '@/services/queryStringServices';

import { Wrapper } from './styles';
import Book from '../Book/Book';

type PageHandlerType = (selectedItem: {selected: number}) => void ;
type PropsType = {
  pageCount: number;
};

const BooksSection: React.FC<PropsType> = (props) => {
  const router = useRouter();

  const books = useAppSelector((store) => store.book.books);

  const handlePageClick: PageHandlerType = (event) => {
    const pageNumber = event.selected;

    const newQueryStr = createQueryString({
      query: router.query,
      key: 'page',
      option: pageNumber.toString(),
    });
    replaceURLQueryParams(router, 'page', newQueryStr);
  };

  return (
    <Wrapper>
      { books.length
        ? books.map((book, idx) => (<Book info={book} key={idx} />))
        : null
      }

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={props.pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

    </Wrapper>
  );
};

export default BooksSection;
