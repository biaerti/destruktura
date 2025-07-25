// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pl">
      <Head>
        {/* Favicon z logo3kat.png */}
        <link rel="icon" href="/3trojkaty.svg" />
        {/* Import czcionki Changa */}
        <link
          href="https://fonts.googleapis.com/css2?family=Changa:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
