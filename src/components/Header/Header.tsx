import Image from 'next/image';

import loop from '@/images/Frame 209.png';
import logo from '@/images/logo.png';
import Button from '../PrimaryButton';
import PrimoryInput from '../Input';
import { StyledHeader } from './StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
        <Image src={logo} alt="logo" />
        <span>Catalog</span>
        <PrimoryInput type="search" placeholder="Search" icon={loop} width={630} />
        <Button>Log In/ Sign Up</Button>
    </StyledHeader>
  );
}
