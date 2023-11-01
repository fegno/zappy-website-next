import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zappy</title>
        <link rel="icon" href='/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
