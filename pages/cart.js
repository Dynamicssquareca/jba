import React, { useState, useEffect } from "react";
import Head from "next/head";
import useAuth from "@/pages/hooks/useAuth";
import CartItems from "components/ecommerce/CartItems";
import CartTotal from "components/ecommerce/CartTotal";
import AppURL from "./api/AppUrl";
 
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { userData, loading } = useAuth();
 
  useEffect(() => {
    if (!loading && userData) {
      const token = localStorage.getItem('authToken');
      if (token) {
        fetch(AppURL.UserCartList, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === 1) {
              setCartItems(data.data);
            } else {
              console.error('Failed to fetch cart items.');
            }
          })
          .catch((error) => console.error('Error fetching cart items:', error));
      } else {
        window.location.replace('/user/login');
      }
    }
  }, [loading, userData]);

  const handleRemoveItem = (itemId) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      fetch(AppURL.UserRemoveCart(itemId), {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ cartId: itemId })  
      })
      .then(async (response) => {
        if (response.ok) {
          const contentType = response.headers.get('Content-Type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            if (data.status === 1) {
              
              setCartItems(cartItems.filter(item => item.id !== itemId));
            } else {
              console.error('Failed to remove item:', data.message);
            }
          } else {
            const text = await response.text();
            console.error('Unexpected response:', text);
          }
        } else {
          const text = await response.text();
          console.error('HTTP error:', response.status, response.statusText);
          console.error('Error response:', text);
        }
      })
      .catch((error) => console.error('Error removing item:', error));
    }
  };
 
 
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
      shipping: 'FREE',  
      totalCost,
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const { subtotal, totalDiscount, shipping, totalCost } = calculateTotals(cartItems);
 
  return (
    <>
      <Head>
        <title>Cart | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">Home</a> <span></span>Shop <span></span>Cart
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
                    <h1 className="heading-cart">Your Cart</h1>
                    <CartItems items={cartItems} onRemoveItem={handleRemoveItem}/>
                  </div>
                </div>
                <div className="col-lg-5">
                  <CartTotal subtotal={subtotal}
                    totalDiscount={totalDiscount}
                    shipping={shipping}
                    totalCost={totalCost} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default Cart;
 