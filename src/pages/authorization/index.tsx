import Image from 'next/image';
import manPicture from '@/images/man.png';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Form from '@/components/Form/Form';
import { StyledSection } from './styles';

export default function Auth() {
  return (
    <>
      <Header />

      <StyledSection>

        <Form />

        <Image src={manPicture} alt="Man with book" />

      </StyledSection>

      <Footer />
    </>
  );
}
