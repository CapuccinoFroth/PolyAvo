import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";
import { MetaMaskProvider } from "@metamask/sdk-react";
import React, { useMemo } from 'react';
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {

  const sdkOptions = useMemo(() => ({
    debug: false,
    sdkOptions: {
      dappMetadata: {
        name: "Example React Dapp",
        // Use window.location.href if window is defined, otherwise use a default or empty string
        url: typeof window !== "undefined" ? window.location.href : '',
      },
      // Other options
    }
  }), []);

  return (
    <>
      <Head>
        <title>PolyAVO</title>
        <meta
          name="description"
          content="PolyAVO"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A0" />
        <link rel="manifest" href="/app.webmanifest" />
      </Head>
      <MetaMaskProvider
           {...sdkOptions}>
            <Component {...pageProps} />
        </MetaMaskProvider>
      
    </>
  );
};

export default MyApp;
