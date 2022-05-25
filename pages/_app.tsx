import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/reset.css";
import { GlobalStyle } from "../styles/global";
import { FontStyle } from "../styles/fonts";
import { Configs } from "services/configs";
import { SharedProvider } from "services/context/shared";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "bootstrap/dist/css/bootstrap.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SharedProvider>
      <Head>
        <title>Sanderson Solar</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="description"
          content="This is an example of a meta description. This will often show up in search results."
        />
        <meta
          name="viewport"
          content="height=device-height,width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no,minimal-ui"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="origin" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content={Configs.author} />

        <meta name="google-site-verification" content="" />
        <meta name="rating" content="general" />
      </Head>

      <FontStyle />

      <GlobalStyle />

      <Component {...pageProps} />
    </SharedProvider>
  );
};

export default App;
