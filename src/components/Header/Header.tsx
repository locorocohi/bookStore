import Image from 'next/image';
import logo from '@/images/logo.png';
import loop from '@/images/search.svg';
// import Link from 'next/link';
import Button from '../Button';
import Input from '../Input';
import { HeaderWrap } from './StyledHeader';

export default function Header() {
  return (
    <HeaderWrap>
      <Image src={logo} alt="logo" priority />
      <span>Catalog</span>
      <Input type="search" placeholder="Search">
        <Image src={loop} alt="loop"
        width={24} height={24}
        />
      </Input>
      <Button>Log In/ Sign Up</Button>
    </HeaderWrap>
  );
}
