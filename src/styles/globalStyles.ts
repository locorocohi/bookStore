import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<{font: string}>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    align-items: center;
  }

  html {
    font-family: ${(p) => p.font};
  }

  body {
    width: 100%;
    height: 100vh;
  }
    
    
  .app-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    align-items: center;
  }

  .width-limiter {
    width: 100%;
    max-width: 1440px;
  }
  `;

export default GlobalStyles;
