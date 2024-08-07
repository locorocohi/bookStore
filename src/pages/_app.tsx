import type { AppProps } from 'next/app';
import { poppins } from '@/fonts';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    width: 1440px;
    display: flex;
    flex-direction: column;
  }`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        html {
          font-family: ${poppins.style.fontFamily};
        }`}
      </style>
      <GlobalStyles />
      <Component {...pageProps} className={poppins.className} />
    </>
  );
}
