import Link from "next/link";
import React, { useState, useRef,useContext} from "react";
import CurrencyContext from "../../context/CurrencyContext";

 import Image from "next/image";
const RelatedProductList = ({productName,productSlug,productprice,sku,frontImg,backImg}) => {  
    const ref=useRef();  
    const { currency } = useContext(CurrencyContext);
  return (
    
    <>

<div>
      
    </div>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
       
          <div className="product-img product-img-zoom">
            <a href={`/products/${productSlug}`}>
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
              </a>
              </div>
       
        </div>
         
        <div className="product-content-wrap">
          <div className="product-category">
          </div>
          <h2>
          <a href={`/products/${productSlug}`}>
               {productName} 
            </a>
          </h2>

          <div>
           
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>
            
          <div className="product-card-bottom">
            <div className="product-price">
              <span>{currency.symbol} {Math.floor(currency.rate*productprice)}</span>
              
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProductList;
