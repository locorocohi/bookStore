import type { ReactNode } from 'react';
import { StyledButton } from './StyledPrimaryButton';

export type PropsType = {
  style?: string;
  children: ReactNode;
};

const PrimaryButton:React.FC<PropsType> = (props) => {
  return <StyledButton className={props.style}>{props.children}</StyledButton>;
};

export default PrimaryButton;
