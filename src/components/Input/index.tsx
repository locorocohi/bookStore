import Image from 'next/image';
import close from '@/images/close.svg';
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
      <div className="close">
        <Image src={close} alt="X"
        width={13} height={13}
        />
      </div>
    </Wrapper>
  );
};

export default PrimoryInput;
