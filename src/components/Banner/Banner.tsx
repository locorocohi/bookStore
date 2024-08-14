import { Wrapper } from './styles';

type PropsType = {
  children: React.ReactNode;
};

const Banner: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
};

export default Banner;
