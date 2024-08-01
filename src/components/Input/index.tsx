import { Wrapper } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const PrimoryInput: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Wrapper>
      <div className="icon-wrapper">{children}</div>
      <input className="input-row" {...rest} />
      <div className="close">+</div>
    </Wrapper>
  );
};

export default PrimoryInput;
