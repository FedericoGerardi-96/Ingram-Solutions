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
      <a
        href="https://es.surveymonkey.com/r/39XLL75"
        className="flotante"
        rel="noreferrer"
        target="_blank"
      >
        <i className="fa fa-comment mi-flotante"></i>
      </a>
      <Head>
        <title>Ingram Solutions</title>
        <meta name="description" content="Ingram Solutions Pages" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
