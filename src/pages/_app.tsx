import '../styles/globals.css'
import type { AppProps } from 'next/app'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from '../components/Homepage/Navbar/NavBar';
import Footer from '../components/Homepage/Footer/Footer';
import Image from 'next/image';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )

}

export default MyApp
