import { ReactNode } from 'react';
import { StyledButton } from './StyledPrimaryButton';

type Props= {
  children: ReactNode
}

const PrimaryButton:React.FC<Props> = (props) => {
  return <StyledButton>{props.children}</StyledButton>;
}

export default PrimaryButton;