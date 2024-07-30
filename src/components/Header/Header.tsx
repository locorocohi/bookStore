import Image from 'next/image';

import loop from '@/images/Search.svg';
import logo from '@/images/logo.png';
import Button from '../Button';
import Input from '../Input';
import { StyledHeader } from './StyledHeader';

export default function Header() {
  return (
    <StyledHeader>
        <Image src={logo} alt="logo" priority />
        <span>Catalog</span>
        <Input type="search" placeholder="Search">
          <Image src={loop} alt="loop"
          width={24} height={24}
          />
        </Input>
        <Button>Log In/ Sign Up</Button>
    </StyledHeader>
  );
}
