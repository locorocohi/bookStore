import { Wrapper } from './styles';

type PropsType = {
  children: React.ReactNode;
};
const BooksSection: React.FC<PropsType> = (props) => {
  //useAppSelector
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default BooksSection;
