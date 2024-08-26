import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 2fr;
  max-width: 100%;
  padding: 24px 80px 10px;
  align-items: center;

  :nth-child(1) {
    justify-self: left;
    pointer-events: none;
  }

  :nth-child(2) {
    justify-self: center;
  }

  :nth-child(3) {
    margin: 0 10px;
  }

  :nth-child(4) {
    justify-self: right;
  }

  .login-button {
    text-decoration:none;
    background-color: ${(p) => p.theme.colors.dark_blue};
    color: white;
    border: none;
    border-radius: 16px;
    padding: 10px 50px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    cursor: pointer;
  }

  .login-button:hover {
    background-color: ${(p) => p.theme.colors.dark};
  }

  .login-button:focus {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }

  .catalog {
    text-decoration:none;
  }

  .catalog:visited {
    color: ${(p) => p.theme.colors.dark};
  }
`;
