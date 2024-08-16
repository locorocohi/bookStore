import type { ReactNode } from 'react';
import { Wrapper } from './styles';

type PropsType = {
  children?: ReactNode;
  multiple?: boolean;
  filters: string [];
};

const Select: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
    </Wrapper>
  );
};

export default Select;
