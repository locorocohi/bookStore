// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppins } from "@/fonts";
import styled from "styled-components";

const AppWrapper = styled.main`
width: 100%;
min-height: 100vh;

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper className={poppins.className}>
        <Component {...pageProps} />
    </AppWrapper>
  )
};
