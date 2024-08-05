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
    background-color: #344966;
    color: white;
    border: none;
    border-radius: 16px;
    padding: 10px 50px;

    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    cursor: pointer;
  }

  .catalog {
    text-decoration:none;
  }

  .catalog:visited {
    color: #0D1821;
  }
`;
