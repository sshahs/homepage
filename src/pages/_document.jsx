import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Email Stuff"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/site.webmanifest?v=4" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg?v=4" color="#1e9cd7" />
        <script defer data-domain="stuff2.sshah.email" src="https://analytics.kali.lol/js/script.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
