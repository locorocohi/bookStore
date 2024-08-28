import { useAppSelector } from '@/store/hooks';
import { Wrapper } from './styles';

type PropsType = {
  children: React.ReactNode;
};
const BooksSection: React.FC<PropsType> = (props) => {
  const books = useAppSelector((store) => store.book.books);
  console.log(books);

  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default BooksSection;
