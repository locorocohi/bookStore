import React from 'react';
import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  clearInputValue?: () => void;
}

const PrimoryInput: React.FC<IProps> = (props) => {
  const { children, clearInputValue, ...rest } = props;

  return (
    <Wrapper>
      <div className="icon-wrapper">{children}</div>
      <input className="input-row" {...rest} />
      <button type="button" className="close" onClick={clearInputValue}>+</button>
    </Wrapper>
  );
};

export default PrimoryInput;
