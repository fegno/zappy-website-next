import React from 'react';
import Head from 'next/head';
import '../styles/global.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Zappy</title>
        <link rel="icon" href='/logo.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
