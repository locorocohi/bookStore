import styled from 'styled-components';

export const Wrapper = styled.menu`
display: flex;
gap: 27px;

.button {
  background: transparent;
  padding: 0;
  margin: 0;
  pointer-events: auto;
  width: 48px;
  height: 48px;
  background-color: ${(p) => p.theme.colors.dark_blue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-button-container {
  position: relative;
}

.icon-wrapper {
  position: relative;
  width: 26px;
  height: 26px;
}

.counter-container {
  position: absolute;
  top: -6px;
  left: 33px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.green};

  display: flex;
  justify-content: center;
  align-items: center;
}

.counter {
  color: ${(p) => p.theme.colors.dark_blue};
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
}
  
@media (max-width: 570px) {
  gap: 17px;
  .button {
    width: 33px;
    height: 33px;
  }

  .icon-wrapper {
    width: 17.5px;
    height: 17.5px;
  }
}
`;
