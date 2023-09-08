import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
 
const NewArrivalProductList = ({productName,productSlug,productprice,sku,frontImg,backImg}) => {    
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
        <div className="jba-action-cart">
          <div className="product-rate-cover">
          <div className="d-flex">
            <div className="ratings">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
                <i className="bi bi-star"></i>
            </div>
        </div>
          </div>
          <div className="jba-product-action">
            <a aria-label="Add To Wishlist" className="action-btn hover-up">
              <i className="bi bi-heart-fill"></i>
            </a>
          </div>
        </div>
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href={`/products/${productSlug}`}>
              
            </Link>
          </div>
          <h2>
            <Link href={`/products/${productSlug}`}>
              {productName.substring(0, 33)} 
            </Link>
          </h2>
          <div>
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>
          <div className="product-card-bottom">
            <div className="product-price">
              <span>$ {productprice}</span>
            </div>
            {/* <div className="add-cart">
              <a className="add">
                <i className="bi bi-cart4"></i>Add
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalProductList;
