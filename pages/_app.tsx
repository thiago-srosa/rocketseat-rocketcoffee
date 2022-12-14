import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>RocketCoffee</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
