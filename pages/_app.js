import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://umami-brown-phi.vercel.app/umami.js"
        data-website-id="4c450443-d56a-4484-b14f-01237f9daef9"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
