import React from 'react';
import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  clearInputValue?: () => void;
  filled: boolean;
}

const PrimoryInput: React.FC<IProps> = (props) => {
  const { children, clearInputValue, filled, ...rest } = props;

  return (
    <Wrapper>
      <div className="icon-wrapper">{children}</div>
      <input className="input-row" {...rest} />
      { filled ? <button type="button" className="clear" onClick={clearInputValue}>+</button> : null }
    </Wrapper>
  );
};

export default PrimoryInput;
