import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/router';
import LoadingBar from 'react-top-loading-bar';
import AppURL from "./api/AppUrl";
import CurrencyContext from "../context/CurrencyContext";
 
function MyApp({ Component, pageProps, menuItems }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [currency, setCurrency] = useState({ country: "INR", rate: 83.28, symbol: "₹" });

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
 
  const fetchWithRetry = async (url, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      const response = await fetch(url);
      if (response.ok) return response.json();
      if (response.status !== 429) throw new Error('Server may not response');
       
      await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
    throw new Error('some error from api');
  };
 
  useEffect(() => {
    const handleRouteChangeStart = () => setProgress(4000);
    const handleRouteChangeComplete = () => setProgress(1000);
 
router.events.on('routeChangeStart', handleRouteChangeStart);
router.events.on('routeChangeComplete', handleRouteChangeComplete);
 
    return () => {
router.events.off('routeChangeStart', handleRouteChangeStart);
router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
}, [router.events]);
 
  useEffect(() => {
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      updateCurrency(savedCurrency);
    }
  }, []);
 
  const updateCurrency = debounce(async (newCurrency) => {
    const cachedCurrency = localStorage.getItem("currencyData");
    if (cachedCurrency) {
      setCurrency(JSON.parse(cachedCurrency));
      return; 
    }
 
    try {
      const data = await fetchWithRetry(`${AppURL.ChangeCurrency}?currency=${newCurrency}`);
      const updatedCurrency = {
country: data.country,
        rate: data.rate,
        symbol: data.symbol,
      };
      setCurrency(updatedCurrency);
      localStorage.setItem("currencyData", JSON.stringify(updatedCurrency));
      localStorage.setItem("selectedCurrency", newCurrency);
    } catch (error) {
      console.error("Failed to fetch currency data:", error);
    }
  }, 300); 
 
  return (
    <>
      <LoadingBar
        color='#db2777'
        progress={progress}
        waitingTime={400}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
      <CurrencyContext.Provider value={{ currency, updateCurrency }}>
        <Layout menuItem={menuItems}>
          <Component {...pageProps} />
        </Layout>
      </CurrencyContext.Provider>
    </>
  );
}
 
export default MyApp;
 
MyApp.getInitialProps = async () => {
  const response = await fetch(AppURL.megamenu);
  const menuItems = await response.json();
  return { menuItems };
};