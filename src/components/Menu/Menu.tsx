import Image from 'next/image';
import Link from 'next/link';

import cart from '@/images/Cart.svg';
import profile from '@/images/profile-button.svg';
import favorite from '@/images/Heart.svg';

import { Wrapper } from './styles';

type PropsType = {
  booksCount: number;
};

const Menu: React.FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <div className="cart-button-container">
        <Link href="/cart" className="button">
          <Image src={cart} alt="Cart" />
        </Link>
        <div className="counter-container"><p className="counter">{props.booksCount}</p></div>
      </div>

      <Link href="/favorite" className="button">
        <Image src={favorite} alt="Favorite" />
      </Link>

      <Link href="/profile" className="button">
        <Image src={profile} alt="Profile" />
      </Link>
    </Wrapper>
  );
};

export default Menu;
