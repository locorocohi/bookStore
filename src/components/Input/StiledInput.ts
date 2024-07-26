import styled from 'styled-components';
import Image from 'next/image';

export const StyledInput = styled.input`
width: 100%;
height: 64px;
background-color: rgba(240, 244, 239, 1);
border: none;
border-radius: 16px;
padding-left: 70px;

font-weight: 400;
font-size: 16px;
line-height: 28px;
letter-spacing: 0.75px;
`;

export const StyledIcon = styled(Image)`
  position: absolute;
  bottom: 0.5px;
`;

export const StyledWrapper = styled.div`
input::placeholder{
  color: #B9BAC3;
}

width: ${width => width ? width : 630}px;
position: relative;
`;
