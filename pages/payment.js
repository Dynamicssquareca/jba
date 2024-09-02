import Link from "next/link";
import React from "react";
import CartTotalFinal from "components/ecommerce/CartTotalFinal";
import Head from "next/head";
import CartPayment from "components/ecommerce/CartPayment";
Head

const CartShipping = () => {
  return (
    <>
     <Head>
      <title>Cart Payment | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>


      <div className="page-header breadcrumb-wrap mt-50 mb-50">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">
              Home 
            </a>
            <span></span>Shop
            <span><a href="/user/cart">Cart</a></span>
            <span></span>Shipping
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
                  <h1 className="heading-cart">Payment</h1>
                   <CartPayment />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div><CartTotalFinal /></div>
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
