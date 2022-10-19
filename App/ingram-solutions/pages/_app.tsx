import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MainLayout } from "../components/Layouts/MainLayout";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
        <title>Ingram Solutions</title>
        <meta name="description" content="Ingram Solutions Pages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
