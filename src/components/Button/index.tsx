import { StyledButton } from './StyledPrimaryButton';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button:React.FC<IProps> = (props) => {
  return <StyledButton className={props.className}>{props.children}</StyledButton>;
};

export default Button;
