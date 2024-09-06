import { useAppSelector } from '@/store/hooks';

import Image from 'next/image';
import logo from '@/images/logo.png';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { HeaderWrap } from './StyledHeader';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';

export default function Header() {
  const user = useAppSelector((store) => store.user.user);
  const path = usePathname();

  return (
    <HeaderWrap>
      <Image src={logo} alt="logo" priority />
      <Link className="catalog" href="http://localhost:3000/">Catalog</Link>
      <Search />
      {user
        ? <Menu />
        : (<Link className="login-button"
            href={`${path === '/signup'
              ? 'http://localhost:3000/login'
              : 'http://localhost:3000/signup'}`}
          >
              Log In/ Sign Up
           </Link>)
      }
    </HeaderWrap>
  );
}
