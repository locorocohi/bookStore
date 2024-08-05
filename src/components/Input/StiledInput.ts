import styled from 'styled-components';

export const Wrapper = styled.div<{isFilled?: boolean}>`

position: relative;

.input-row::placeholder{
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
  background-color: #F0F4EF;
  border: none;
  border-radius: 16px;
  padding-left: 70px;
  padding-right: 3.5rem;
  padding-top: ${(props) => (props.isFilled ? '25px' : '0px')};

  font-weight: 400;
  font-size: ${(props) => (props.isFilled ? '14px' : '16px')};
  line-height: ${(props) => (props.isFilled ? '24px' : '28px')};
  letter-spacing: 0.75px;
}

img {
  pointer-events: none;
  filter: contrast(1%) brightness(150%);
}

input:active,
input:focus {
  outline: none;
  box-shadow: 0 0 0 2px #0D1821;
}

input:disabled {
  pointer-events: none;
  background-color: #F0F4EF;

  input::placeholder {
    color: #A0A3BD;
  }
}

input:active:disabled ,
  input:focus:disabled  {
  outline: none;
  box-shadow: none;
}

.clear {
  display: block;
  position: absolute;
  top: 15px;
  right: 25px;
  cursor: pointer;
  font-size: 26px;
  transform: rotate(45deg);
  color: #B9BAC3;

  border: none;
  background-color: transparent;  
  cursor: pointer;
}

.input-span {
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.75px;
  padding-top: 6px;
  padding-left: 70px;
  cursor: inherit;

  position: absolute;
}
`;
