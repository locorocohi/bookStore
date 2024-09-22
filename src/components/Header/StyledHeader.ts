import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr 2fr;
  max-width: 100%;
  padding: 24px 80px 10px;
  align-items: center;
  gap: 51px;

  @media (max-width: 1030px) {
    padding: 24px 15px 10px;
  }

  :nth-child(1) {
    justify-self: left;
  }

  :nth-child(2) {
    justify-self: center;
  }

  :nth-child(4) {
    justify-self: right;
  }

  .login-button {
    min-width: 232px;
    text-decoration:none;
    background-color: ${(p) => p.theme.colors.dark_blue};
    color: white;
    border: none;
    border-radius: 16px;
    padding: 10px 50px;

    ${(p) => p.theme.fonts.button};

    cursor: pointer;
  }

  .login-button:hover {
    background-color: ${(p) => p.theme.colors.dark};
  }

  .login-button:active {
    box-shadow: 0px 0px 0px 8px rgba(185, 186, 195, 0.5);
  }

  .logo {
    pointer-events: none;
  }
  
  .catalog {
    text-decoration: none;
  }

  .catalog:visited {
    color: ${(p) => p.theme.colors.dark};
  }
`;
