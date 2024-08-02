import Image from 'next/image';
import logo from '@/images/logo.png';
import loop from '@/images/search.svg';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Input from '../Input';
import { HeaderWrap } from './StyledHeader';

export default function Header() {
  const path = usePathname();

  return (
    <HeaderWrap>
      <Image src={logo} alt="logo" priority />
      <Link href="http://localhost:3000/">Catalog</Link>
      <Input type="search" placeholder="Search">
        <Image src={loop} alt="loop"
          width={24} height={24}
        />
      </Input>
      <Link href={`${path === '/signup' ? 'login' : 'signup'}`}>Log In/ Sign Up</Link>
      {/* <Button type="button" onClick={replace}>Log In/ Sign Up</Button> */}
    </HeaderWrap>
  );
}
