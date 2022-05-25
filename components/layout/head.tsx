import Head from "next/head";

interface IHead {
  title?: string;
  description?: string;
  image?: string;
}

export function HeadComponent({ title, description }: IHead) {
  return (
    <Head>
      <meta name="description" content={description} />

      {/*Open Graph Facebook*/}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://gps.com.br" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Guiadas para o Sucesso" />
      <meta property="og:description" content={description} />
      {/* <meta
        property="og:image"
        content={`${apiURL}upload/uploads/download/${image}`}
      /> */}
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta
        name="twitter:image"
        content={`${apiURL}upload/uploads/download/${image}`}
      /> */}

      {/*favicon*/}
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="/favicon/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="/favicon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="/favicon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/favicon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/favicon/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/favicon/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/favicon/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/favicon/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-128.png"
        sizes="128x128"
      />
      <meta name="application-name" content="&nbsp;" />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />

      {/*fonte*/}
      <link rel="stylesheet" href="https://use.typekit.net/xjy6bto.css"></link>
    </Head>
  );
}
