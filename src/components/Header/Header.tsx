import { useAppSelector } from '@/store/hooks';

import Image from 'next/image';
import logo from '@/images/logo.png';
import loop from '@/images/search.svg';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderWrap } from './StyledHeader';
import PrimoryInput from '../Input';
import Menu from '../Menu/Menu';

export default function Header() {
  const user = useAppSelector((store) => store.user.user);
  const path = usePathname();

  return (
    <HeaderWrap>
      <Image src={logo} alt="logo" priority />
      <Link className="catalog" href="http://localhost:3000/">Catalog</Link>
      <PrimoryInput
        type="search"
        placeholder="Search"
        // clearInputValue={() => clearInputValue('search')}
        // filled={!!formik.values.search}
        signature="Search"
        >
        <Image src={loop} alt="loop"
          width={24} height={24}
        />
      </PrimoryInput>
      {user
        ? <Menu />
        : <Link className="login-button" href={`${path === '/signup' ? 'login' : 'signup'}`}>Log In/ Sign Up</Link>
      }
    </HeaderWrap>
  );
}
