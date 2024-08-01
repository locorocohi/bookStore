import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const showPassword: React.MouseEventHandler<HTMLDivElement> = (event) => {
  const currElem = event.target as HTMLElement;
  const nextElem = currElem.nextElementSibling as HTMLInputElement;
  if (nextElem.id === 'password' && nextElem.type === 'password') {
    nextElem.type = 'text';
  }
};

const PrimoryInput: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Wrapper>
      <div className="icon-wrapper" onClick={showPassword}>{children}</div>
      <input className="input-row" {...rest} />
      <div className="close">+</div>
    </Wrapper>
  );
};

export default PrimoryInput;
