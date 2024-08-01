import styled from 'styled-components';

export const Wrapper = styled.div`

position: relative;

input::placeholder{
  color: #B9BAC3;
}

.icon-wrapper {
  position: absolute;
  top: 20px;
  left: 25px;
}

.input-row {
  width: 100%;
  height: 64px;
  background-color: rgba(240, 244, 239, 1);
  border: none;
  border-radius: 16px;
  padding-left: 70px;
  padding-right: 3.5rem;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
}
  
.close {
  position: absolute;
  top: 14px;
  right: 25px;
  cursor: pointer;
  font-size: 26px;
  transform: rotate(45deg);
  color: #B9BAC3;
}

img {
  pointer-events: none;
}

input:active,
input:focus,
input:hover {
  outline: none;
} 
input:active,
input:focus {
  border: 2.5px solid black;
}
`;
