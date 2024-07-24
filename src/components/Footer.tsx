import styled from 'styled-components';
import Image from 'next/image';

import whiteLogo from '@/images/whiteLogo.png';
import map from '@/images/map.png';

const StyledFooter = styled.footer`
background-color: rgba(13, 24, 33, 1);
padding: 73px 80px;
max-width: 100%;

display: flex;
justify-content: space-between;
color: white;

font-size: 20px;
font-weight: 400;
line-height: 30px;
text-align: left;
`;

export default function Footer() {
  return (
    <StyledFooter>
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
    </StyledFooter>
  );
}
