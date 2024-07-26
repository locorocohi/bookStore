import { StyledInput, StyledWrapper, StyledIcon } from './StiledInput';

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
}

const PrimoryInput: React.FC<IProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <StyledWrapper>
      <StyledIcon>{children}</StyledIcon>
      <StyledInput {...rest} />
    </StyledWrapper>
  );
};

export default PrimoryInput;
