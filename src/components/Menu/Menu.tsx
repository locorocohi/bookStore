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
        <div className="icon-wrapper">
          <Image src={cart} alt="Cart" fill />
        </div>
        </Link>
        {props.booksCount ? <div className="counter-container"><p className="counter">{props.booksCount}</p></div> : null}
      </div>

      <Link href="/favorite" className="button">
      <div className="icon-wrapper">
        <Image src={favorite} alt="Favorite" fill />
      </div>
      </Link>

      <Link href="/profile" className="button">
      <div className="icon-wrapper">
        <Image src={profile} alt="Profile" fill />
      </div>
      </Link>
    </Wrapper>
  );
};

export default Menu;
