import styled from 'styled-components';

export const Wrapper = styled.div<{$isFilled?: boolean}>`

position: relative;

.input-row::placeholder{
  color: ${(p) => p.theme.colors.dark_grey};
}

.icon-wrapper {
  position: absolute;
  top: 20px;
  left: 25px;
}

.input-row {
  width: 100%;
  height: 64px;
  background-color: ${(p) => p.theme.colors.light};
  border: none;
  border-radius: 16px;
  padding-left: 70px;
  padding-right: 3.5rem;
  padding-top: ${(props) => (props.$isFilled ? '25px' : '0px')};

  font-weight: 400;
  font-size: ${(props) => (props.$isFilled ? '14px' : '16px')};
  line-height: ${(props) => (props.$isFilled ? '24px' : '28px')};
  letter-spacing: 0.75px;
}

img {
  pointer-events: none;
  filter: contrast(1%) brightness(150%);
}

.input-row:active,
.input-row:focus {
  outline: 2px solid ${(p) => p.theme.colors.dark_blue};
  outline-offset:-2px;
}

.input-row:active:disabled ,
.input-row:focus:disabled  {
  outline: none;
}

.input-row:disabled {
  pointer-events: none;
  background-color: ${(p) => p.theme.colors.light};

  .input-row::placeholder {
    color: #A0A3BD;
  }
}


.clear {
  display: block;
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 26px;
  transform: rotate(45deg);
  color: ${(p) => p.theme.colors.dark_grey};

  border: none;
  background-color: transparent;  
  cursor: pointer;
}

.input-span {
 ${(p) => p.theme.fonts.form_hint}
  padding-top: 6px;
  padding-left: 70px;
  cursor: inherit;

  position: absolute;
}

.span-access {
  color: #00966D;
}

.span-denied {
  color: #C30052;
}
`;
