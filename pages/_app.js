import '../styles/globals.css'
import Script from "next/script";
import Head from 'next/head'
import Whatsapp from '../components/Whatsapp/Whatsapp';
import Marquee from 'react-fast-marquee';
import Router from 'next/router';

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
    <div className="text-justify">
      <Component {...pageProps} />
     </div>
      <div className="fixed bottom-8 z-20 right-0">
      <Whatsapp/>
      </div>
      <div className="fixed bottom-0 z-20 right-0 bg-brand-color" style={{margin:-1, width:"100%"}}>
      <Marquee 
      speed={100}
      gradient={false}
      style={{width:"100%"}}>
      <div className="w-4/4 text-white-color font-semibold mr-40 ml-40">
          ---NEWS FLASH---  
        </div>
      <div className="w-4/4 text-white-color font-semibold">
          VIP FLEETS airport pickup and drop is coming soon on playstore and apple store
        </div>
      <div className="w-4/4 text-white-color font-semibold ml-40 mr-40">
         ---NEWS FLASH---
        </div>
        <div className="w-4/4 text-white-color font-semibold">
          We operate in Abuja, Lagos and Port Harcourt 
        </div>
      </Marquee>
      </div>
    </>
  )
}

export default MyApp
