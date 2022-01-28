import '../styles/globals.css'
import Script from "next/script";
import Head from 'next/head'
import Whatsapp from '../components/Whatsapp/Whatsapp';
import Marquee from 'react-fast-marquee';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title> VIP FLEETS </title>
      <meta name="keywords" content="Airport pickup, Luxury"/>
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
      id="my-script"
        strategy="lazyOnload"
      >
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments); }
        gtag('js', new Date());
      
        gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`
        }
    </Script>
      <Component {...pageProps} />
      <div className="fixed bottom-8 z-20 right-0">
      <Whatsapp/>
      </div>
      <div className="fixed bottom-0 z-20 right-0 bg-brand-color" style={{margin:-1, width:"100%"}}>
      <Marquee 
      gradient={false}
      style={{width:"100%"}}>
      <div className="w-4/4 text-white-color font-semibold">
       Vip Fleets airport pickup and drop is coming soon on playstore and apple store
        </div>
      </Marquee>
      </div>
    </>
  )
}

export default MyApp
