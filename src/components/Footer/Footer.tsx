import Image from 'next/image';

import whiteLogo from '@/images/whiteLogo.png';
import map from '@/images/map.png';

import { StyledFooter } from './StyledFooter';

export default function Footer() {
  return (
    <StyledFooter>
    <div className="wrapper">
      <div>
        <Image src={whiteLogo} alt="whiteLogo" />
        <p>tranthuy.nute@gmail.com</p>
        <p>8 (800) 555 - 35 - 35</p>
      </div>
      <div>
        <p>Home Page</p>
        <p>Catalog</p>
        <p>My Account</p>
        <p>Cart</p>
      </div>
      <div>
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <Image src={map} alt="map" />
      </div>
    </div>
    </StyledFooter>
  );
}
