import Image from 'next/image';

import loop from '@/images/Search.svg';
import logo from '@/images/logo.png';
import Button from '../PrimaryButton';
import PrimoryInput from '../Input';
import { StyledHeader } from './StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
        <Image src={logo} alt="logo"
        />
        <span>Catalog</span>
        <PrimoryInput type="search" placeholder="Search">
          <Image src={loop} alt="loop"
          width={24} height={24}
          />
        </PrimoryInput>
        <Button>Log In/ Sign Up</Button>
    </StyledHeader>
  );
}
