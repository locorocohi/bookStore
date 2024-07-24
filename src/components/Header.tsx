import styled from 'styled-components';
import Image from 'next/image';

import loop from '@/images/Frame 209.png';
import logo from '@/images/logo.png';
import Button from './PrimaryButton';

const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
max-width: 100%;
padding: 24px 80px 10px;
align-items: center;
`;

const StyledSearch = styled.div`
  width: 630px;
  position: relative;
`;

const StyledIcon = styled(Image)`
  position: absolute;
`;

const StyledInput = styled.input`
width: 100%;
height: 64px;
background-color: rgba(240, 244, 239, 1);
border: none;
border-radius: 16px;
padding-left: 70px;
`;

export default function Header() {
  return (
    <StyledHeader>
        <Image src={logo} alt="logo" />
        <span>Catalog</span>
        <StyledSearch>
          <StyledIcon src={loop} alt="loop" />
          <StyledInput type="search" placeholder="Search" />
        </StyledSearch>
        <Button>Log In/ Sign Up</Button>
    </StyledHeader>
  );
}
