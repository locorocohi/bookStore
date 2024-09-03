import type { AppProps } from 'next/app';
import { poppins } from '@/fonts';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import GlobalStyles from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/constants';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles font={poppins.style.fontFamily} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <div className="app-wrapper">
              <div className="width-limiter">
                <Header />
                <Component {...pageProps} className={poppins.className} />
              </div>
              <Footer />
            </div>
            <ToastContainer />
          </ThemeProvider>
        </Provider>
    </>
  );
}

const erroredToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });
};
