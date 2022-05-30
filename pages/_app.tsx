import React from "react";
import { CacheProvider } from "@emotion/react";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import createEmotionCache from "../utils/createEmotionCache";
import defaultTheme from "../styles/theme/defaultTheme";
import "../styles/globals.css";
import { MainAppWrapper } from "../components/MainAppWrapper";
import { OrderProvider } from "../context/OrderContext";
import { Footer } from "../components/Footer";

const clientSideEmotionCache = createEmotionCache();

interface IAdditionalAppProps {
  emotionCache?: typeof clientSideEmotionCache;
}

const MyApp = (props: AppProps & IAdditionalAppProps) => {
  const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="init-ga-script" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <PayPalScriptProvider
        options={{
          "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
          currency: "USD",
        }}
      >
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <OrderProvider>
              <MainAppWrapper>
                <Component {...pageProps} />
                <Footer />
              </MainAppWrapper>
            </OrderProvider>
          </ThemeProvider>
        </CacheProvider>
      </PayPalScriptProvider>
    </>
  );
};

export default MyApp;
