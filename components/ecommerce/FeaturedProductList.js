import Link from "next/link";
import React, { useState,useContext } from "react";
import CurrencyContext from "../../context/CurrencyContext";
import Image from 'next/image'
const FeaturedProductList = ({productName,productSlug,productprice,sku,frontImg,backImg}) => {   
  const { currency } = useContext(CurrencyContext); 
  return (
    
    <>

<div>
      
    </div>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href={`/products/${productSlug}`}>
            <Image
            className="default-img"
            src={frontImg}
            alt={productName}
            width={365}
            height={365}
            />
            <Image
            className="hover-img"
            src={backImg}
            alt={productName}
            width={365}
            height={365}
            /> 
            </Link>
          </div>
       
        </div>
       
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href={`/products/${productSlug}`}>
             
            </Link>
          </div>
          <h2>
            <Link href={`/products/${productSlug}`}>
              {productName} 
            </Link>
          </h2>

          <div>
           
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>
            
          <div className="product-card-bottom">
            <div className="product-price">
              <span>{currency.symbol} {Math.floor(currency.rate*productprice).toLocaleString('en-IN')}</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProductList;
