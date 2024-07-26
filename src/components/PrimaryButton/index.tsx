import { StyledButton } from './StyledPrimaryButton';

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  class?: string;
}

// export type PropsType = {
//   style?: string;
//   children: ReactNode;
// };

const PrimaryButton:React.FC<IProps> = (props) => {
  return <StyledButton className={props.class}>{props.children}</StyledButton>;
};

export default PrimaryButton;
