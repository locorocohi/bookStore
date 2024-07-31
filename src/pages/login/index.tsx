import Image from 'next/image';
import manPicture from '@/images/man.png';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SignUpForm from '@/components/Form/Form';
import { StyledSection } from '../signup/styles';

const LogIn = () => {
  return (
    <>
      <Header />

      <StyledSection>

        <SignUpForm />

        <Image src={manPicture} alt="Man with book" />

      </StyledSection>

      <Footer />
    </>
  );
};

export default LogIn;
