import type { StaticImageData } from 'next/image';
import { StyledInput, StyledWrapper, StyledIcon } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: StaticImageData;
  width: number;
}

const PrimoryInput: React.FC<IProps> = (props) => {
  const { icon, width, ...rest } = props;
  return (
    <StyledWrapper width={width}>
      <StyledIcon src={icon} alt="icon" />
      <StyledInput {...rest} />
    </StyledWrapper>
  );
};

export default PrimoryInput;
