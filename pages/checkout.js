import React, { useState, useEffect,useContext } from "react";
import Head from "next/head";
import UserCheckoutAddress from "@/components/user/UserCheckoutAddress";
import ShippingTotal from "components/ecommerce/ShippingTotal";
import AppURL from "./api/AppUrl";
import useAuth from "@/pages/hooks/useAuth";
import CurrencyContext from "../context/CurrencyContext";
 
const CartShipping = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentType, setPaymentType] = useState("1"); 
  const { userData, loading } = useAuth();
  const { currency } = useContext(CurrencyContext);
  const CountryCurrency = currency.country;
  const CountryRate = currency.rate;
 
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!loading && userData) {
        const token = localStorage.getItem("authToken");
        if (token) {
          try {
            const response = await fetch(AppURL.UserCartList, {
              headers: {
                "Authorization": `Bearer ${token}`,
              },
            });
            const data = await response.json();
            if (data.status === 1) {
              setCartItems(data.data);
            } else {
              console.error("Failed to fetch cart items.");
            }
          } catch (error) {
            console.error("Error fetching cart items:", error);
          }
        } else {
          window.location.replace("/user/login");
        }
      }
    };
 
    fetchCartItems();
  }, [loading, userData]);
 
  const calculateTotals = (items) => {
    let subtotal = 0;
    let totalDiscount = 0;
    items.forEach(item => {
      subtotal += item.product.product_price * item.qty;
      totalDiscount += item.discount || 0;
    });
    const totalCost = subtotal - totalDiscount;
    return {
      subtotal,
      totalDiscount,
      shipping: "FREE",
      totalCost,
    };
  };

const handleOrderCod = async()=>{
  if (!selectedAddress) {
    alert("Please select an address before proceeding.");
    return;
  }

  const token = localStorage.getItem("authToken");
  if (token) {
    try {
      const { totalCost } = calculateTotals(cartItems);
      console.log(Math.floor(CountryRate*totalCost) * 100);
      const response = await fetch(AppURL.UserCheckoutCOD, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.floor(CountryRate*totalCost) * 100,
          address_id: selectedAddress,  
          payment_type: 2,   
           
        }),
      });
      const data = await response.json();
      console.log(data.order);
      if (data.status === 1) {
        window.location.replace(`/order_success?orderId=${data.order}`);
      } else {
        console.error("Failed to create order:", data.message);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  } else {
    alert("User not authenticated.");
  }
}










 
  const handlePayment = async () => {
    if (!selectedAddress) {
      alert("Please select an address before proceeding.");
      return;
    }
 
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const { totalCost } = calculateTotals(cartItems);
        console.log(Math.floor(CountryRate*totalCost) * 100);
        const response = await fetch(AppURL.UserCheckout, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.floor(CountryRate*totalCost) * 100,
            address_id: selectedAddress,  
            payment_type: paymentType,   
            CountryCurrency : CountryCurrency, 
          }),
        });
        const data = await response.json();
        console.log(data.order);
        if (data.status === 1) {
          if (paymentType === "1") {  
            const options = {
              key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
              amount: Math.floor(CountryRate*totalCost) * 100,
              currency: CountryCurrency,
              name: "JBA",
              description: "Payment for Cart Items",
              order_id: data.paymentorderId,
              handler: async function (response) {
                console.log(response);
                try {
                  
                  const verifyResponse = await fetch(AppURL.UserVerifyPayment, {
                    method: "POST",
                    headers: {
                      "Authorization": `Bearer ${token}`,
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      payment_id: response.razorpay_payment_id,
                      order_id: response.razorpay_order_id,
                      signature: response.razorpay_signature,
                      amount: Math.floor(CountryRate*totalCost) * 100, 
                      OrderId:data.order,
                    }),
                  });
                  const verifyData = await verifyResponse.json();
  
                  if (verifyData.status === 1) {
                    window.location.replace(`/order_success?orderId=${data.order}`);
                  } else {
                    console.error("Payment verification failed:", verifyData.message);
                    alert("Payment verification failed. Please try again.");
                  }
                } catch (error) {
                  console.error("Error verifying payment:", error);
                  alert("Error verifying payment. Please contact support.");
                }
              },
  
              prefill: {
              name: userData.name,
              email: userData.email,
              contact: userData.phone,
              },
              theme: {
                color: "#3399cc",
              },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
          } else {
            alert("Order placed successfully with wallet payment.");
          }
        } else {
          console.error("Failed to create order:", data.message);
        }
      } catch (error) {
        console.error("Error creating order:", error);
      }
    } else {
      alert("User not authenticated.");
    }
  };
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  const { subtotal, totalDiscount, shipping, totalCost } = calculateTotals(cartItems);
 
  return (
    <>
      <Head>
        <title>Cart Shipping | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
        <script src="https://checkout.razorpay.com/v1/checkout.js" defer></script>
      </Head>
      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span></span>Shop <span></span>Cart <span></span>Shipping
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12">
              <div className="row">
                <div className="col-lg-7">
                  <div className="cart-righ-b">
                    <h1 className="heading-cart">Shipping</h1>
                    <UserCheckoutAddress onAddressSelect={setSelectedAddress} />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div>
                    <ShippingTotal
                      subtotal={subtotal}
                      totalDiscount={totalDiscount}
                      shipping={shipping}
                      totalCost={totalCost}
                    />
                    {/* <div className="check-out mt-50">
                      <button onClick={handlePayment} className="btn btn-primary">Pay Now</button>
                    </div> */}
                    <div className="check-out mt-50">
                      <button onClick={handleOrderCod} className="btn btn-primary">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default CartShipping;