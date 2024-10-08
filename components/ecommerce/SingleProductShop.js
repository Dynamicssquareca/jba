import Link from "next/link";
import React,{useContext} from "react";
import Image from "next/image";
import CurrencyContext from "../../context/CurrencyContext";

const SingleProductShop = ({ productName, productSlug, sku, productPrice, productFrontImage, productBackImage }) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <>
      <div className="product-cart-wrap mb-30">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <Link href={`/products/${productSlug}`}>
              <Image
                className="default-img"
                src={productFrontImage}
                alt={productName}
                width={354}
                height={354}
              />
              <Image
                className="hover-img"
                src={productBackImage}
                alt={productName}
                width={354}
                height={354}
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
            <Link href="/products/ring/">

            </Link>
          </div>
          <h2>
            <Link href={`/products/${productSlug}`}>
              {productName.substring(0, 32)}
            </Link>
          </h2>

          <div>
            <span className="font-small text-muted">SKU:{sku}</span>
          </div>

          <div className="product-card-bottom">
            <div className="product-price">
              <span>{currency.symbol} {Math.floor(currency.rate * productPrice).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductShop;
