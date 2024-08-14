import type { ReactNode } from 'react';
import { Wrapper } from './styles';
import Option from './Options/Option';

type PropsType = {
  children?: ReactNode;
  multiple?: boolean;
  filters: string [];
};

const Select: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      {props.filters.map((genre, index) => <Option key={index}>{genre}</Option>)}
    </Wrapper>
  );
};

export default Select;
