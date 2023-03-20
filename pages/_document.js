import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
