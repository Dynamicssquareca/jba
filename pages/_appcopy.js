
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import AppURL from "./api/AppUrl";
import CurrencyContext from "../context/CurrencyContext"


function MyApp({ Component, pageProps,menuItems }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(4000)                              
    })
    
    router.events.on('routeChangeComplete',()=>{
      setProgress(1000)
    })
  })
   
  return <>
  <LoadingBar
        color='#db2777'
        progress={progress}
        waitingTime={400}
        height = {4}
        onLoaderFinished={() => setProgress()}
      />
<Layout menuItem={menuItems}>
<Component {...pageProps} />
</Layout>
 
 
  </>
}
 
export default MyApp

MyApp.getInitialProps = async () => {
  const response = await fetch(AppURL.megamenu);
  const menuItems = await response.json();
  return {
    menuItems,
  };
};