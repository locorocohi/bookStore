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

      <div className="man-picture">
        <Image src={manPicture} alt="Man with book" fill />
      </div>

    </StyledSection>
  );
};

export default AuthSection;
