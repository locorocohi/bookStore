import styled from 'styled-components';

export const HeaderWrap = styled.header`
  display: flex;
  max-width: 100%;
  padding: 24px 80px 10px;
  align-items: center;
  justify-content: space-between;
  gap: 128px;

 .logo-link {
    position: relative;
    width: 88.4px;
    height: 46px;
 }
  
 .links-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
 }

  :nth-child(2) {
    flex-grow: 1;
  }

  .login-button {
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
    ${(p) => p.theme.fonts.button};
  }
  
  .catalog:visited {
    color: ${(p) => p.theme.colors.dark};
  }

  @media (max-width: 1200px) {
    gap: 51px;   
  }
  @media (max-width: 1130px) {
    .links-wrapper {
      gap: 51px;
    }
    padding: 24px 15px 20px;
  }

  @media (max-width: 770px) {
    flex-wrap: wrap;
    gap: 18px;

    div:nth-child(2) {
      order: 4;
    }
  }

  @media (max-width: 570px) {
    .logo-link {
      width: 62px;
      height: 31px;
    }

    .links-wrapper  {
      gap: 18px;
    }
    .login-button {
      padding: 10px 17px;
    }
  }
`;
