import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { getFilteredBooks } from '@/store/thunks';

import { Wrapper } from './styles';
import Book from '../Book/Book';

type PageHandlerType = (selectedItem: {selected: number}) => void ;
type PropsType = {
  pageCount: number;
};

const BooksSection: React.FC<PropsType> = (props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const books = useAppSelector((store) => store.book.books);

  const handlePageClick: PageHandlerType = (event) => {
    const pageNumber = event.selected;
    router.push({
      query: {
        ...router.query,
        page: (pageNumber + 1).toString(),
      },
    }, '', {
      scroll: false,
    });
  };

  useEffect(() => {
    dispatch(getFilteredBooks(router.query));
  }, [dispatch, router.query]);

  return (
    <Wrapper
      $count={books.length}
    >
      <div className="books">
        { books.length
          ? books.map((book, idx) => (<Book info={book} key={idx} />))
          : null
        }
      </div>

      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={props.pageCount}
        nextLabel=""
        previousLabel=""
        renderOnZeroPageCount={null}
        className="pages-container"
        pageLinkClassName="page-link"
        previousLinkClassName="previous-link"
        nextLinkClassName="next-link"
        pageLabelBuilder={() => (<div className="page" />) }
      />

    </Wrapper>
  );
};

export default BooksSection;
