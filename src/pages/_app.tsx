import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>

    <Head>
      <title>Coding Platform</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
      <meta name='description' content='Web application that contains coding problems and their solutions' />
    </Head>

    </>
  );
}
