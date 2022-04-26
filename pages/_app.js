import '../styles/globals.css'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title >Bogd.app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="manifest" href="manifest.webmanifest"></link>

      </Head>
      <Toaster/>
    <Component {...pageProps} />
  </>
}

export default MyApp
