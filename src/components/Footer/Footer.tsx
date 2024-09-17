import Image from 'next/image';
import Link from 'next/link';

import whiteLogo from '@/images/whiteLogo.png';
import map from '@/images/map.png';

import { StyledFooter } from './StyledFooter';
import { config } from '../../../config';

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
        <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/`} className="link">Home page</Link>
        <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/`} className="link">Catalog</Link>
        <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/profile`} className="link">My account</Link>
        <Link href={`http://${config.HOST}:${config.LOCAL_PORT}/cart`} className="link">Cart</Link>
      </div>
      <div>
        <p>6391 Elgin St. Celina, Delaware 10299</p>
        <Image src={map} alt="map" />
      </div>
    </div>
    </StyledFooter>
  );
}
