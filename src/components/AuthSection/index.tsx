import Image from 'next/image';
import manPicture from '@/images/man.png';
import { StyledSection } from './styles';

interface IProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const AuthSection:React.FC<IProps> = (props) => {
  return (
    <StyledSection>

      {props.children}

      <Image src={manPicture} alt="Man with book" />

    </StyledSection>
  );
};

export default AuthSection;
