import type { AppProps } from 'next/app';
import { poppins } from '@/fonts';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    justify-content: center;
  }

  body {
    width: 100%;
    max-width: 1440px;
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
      <Provider store={store}>
        <>
        <Header />
        <Component {...pageProps} className={poppins.className} />
        <Footer />
        </>
      </Provider>
    </>
  );
}
