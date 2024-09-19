import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  signature: string;

  clearInputValue?: (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  $isFilled: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  ref?: React.MutableRefObject<HTMLInputElement>;
}

const Input: React.FC<IProps> = (props) => {
  const {
    children,
    clearInputValue,
    signature,
    $isFilled,
    isError,
    isDisabled,
    ref,
    ...rest } = props;
  const inputStatus = isError ? 'denied' : 'access';

  // eslint-disable-next-line no-nested-ternary
  const spanStatus = typeof isError === 'undefined'
    ? ''
    : isError
      ? 'span-denied'
      : 'span-access';

  return (
    <Wrapper className={$isFilled ? inputStatus : ''} $isFilled={$isFilled}>
      <div className="icon-wrapper">{children}</div>
      { $isFilled ? <span className={`${spanStatus} input-span`}>{signature}</span> : null }
      <input ref={ref} className="input-row" disabled={isDisabled} {...rest} />
      { $isFilled ? <button type="button" className="clear" onClick={clearInputValue}>+</button> : null }
    </Wrapper>
  );
};

export default Input;
