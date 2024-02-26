import React from "react";
import Head from "next/head";
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Head>
          <title>Zappy</title>
          <link rel="icon" href="/logo.png" />
        </Head>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>    </>
  );
}

export default MyApp;
