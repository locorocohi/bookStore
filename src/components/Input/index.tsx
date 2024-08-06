import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  signature: string;

  clearInputValue?: () => void;
  isFilled?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
}

const Input: React.FC<IProps> = (props) => {
  const { children, clearInputValue, signature, isFilled, isError, isDisabled, ...rest } = props;
  const inputStatus = isError ? 'denied' : 'access';
  return (
    <Wrapper className={isFilled ? inputStatus : ''} isFilled={isFilled}>
      <div className="icon-wrapper">{children}</div>
      { isFilled ? <span className="input-span">{signature}</span> : null }
      <input className="input-row" disabled={isDisabled} {...rest} />
      { isFilled ? <button type="button" className="clear" onClick={clearInputValue}>+</button> : null }
    </Wrapper>
  );
};

export default Input;
