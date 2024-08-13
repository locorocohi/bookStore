import { useRouter } from 'next/router';
import Image from 'next/image';

import cart from '@/images/Cart.svg';
import profile from '@/images/profile-button.svg';
import favorite from '@/images/Heart.svg';
import { config } from '../../../config';

import Button from '../Button';
import { Wrapper } from './styles';

const Menu = () => {
  const router = useRouter();

  const redirectToFavorite = () => {
    router.push(new URL(`http://${config.HOST}:${config.LOCAL_PORT}/favorite`));
  };

  const redirectToCart = () => {
    router.push(new URL(`http://${config.HOST}:${config.LOCAL_PORT}/cart`));
  };

  const redirectToProfile = () => {
    router.push(new URL(`http://${config.HOST}:${config.LOCAL_PORT}/profile`));
  };

  return (
    <Wrapper>
      <Button type="button" className="button" onClick={redirectToCart}>
        <Image src={cart} alt="Cart" />
      </Button>

      <Button type="button" className="button" onClick={redirectToFavorite}>
        <Image src={favorite} alt="Favorite" />
      </Button>

      <Button type="button" className="button" onClick={redirectToProfile}>
        <Image src={profile} alt="Profile" />
      </Button>
    </Wrapper>
  );
};

export default Menu;
