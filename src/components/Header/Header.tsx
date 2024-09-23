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
  const booksInCartCount = useAppSelector((store) => store.cart.count);
  const path = usePathname();

  return (
    <HeaderWrap>
      <div className="links-wrapper">
        <Link href="/" className="logo-link"><Image fill src={logo} alt="logo" priority className="logo" /></Link>
        <Link className="catalog" href="/">Catalog</Link>
      </div>
      <Search />
      {user
        ? <Menu booksCount={booksInCartCount} />
        : (<Link className="login-button"
            href={`${path === '/signup'
              ? '/login'
              : '/signup'}`}
          >
              Log In/ Sign Up
           </Link>)
      }
    </HeaderWrap>
  );
}
