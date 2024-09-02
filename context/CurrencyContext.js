import React, { createContext, useState, useEffect } from "react";
import AppURL from "../pages/api/AppUrl";  

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children, defaultCurrency }) => {
  const [currency, setCurrency] = useState(defaultCurrency);

  useEffect(() => {
    
    const savedCurrency = localStorage.getItem("selectedCurrency");
    if (savedCurrency) {
      fetchCurrencyRate(savedCurrency);
    } else {
      fetchCurrencyRate(defaultCurrency.country);  
    }
  }, []);

  const fetchCurrencyRate = async (selectedCurrency) => {
    try {
      const response = await fetch(`${AppURL.ChangeCurrency}?currency=${selectedCurrency}`);
      const data = await response.json();
      setCurrency({
        country: selectedCurrency,
        rate: data.rate,
        symbol: data.symbol,
      });
       
      localStorage.setItem("selectedCurrency", selectedCurrency);
    } catch (error) {
      console.error("Error fetching currency rate:", error);
    }
  };

  const updateCurrency = (newCurrency) => {
    setCurrency((prev) => ({ ...prev, country: newCurrency }));
    fetchCurrencyRate(newCurrency);
  };

  return (
    <CurrencyContext.Provider value={{ currency, updateCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContext;
