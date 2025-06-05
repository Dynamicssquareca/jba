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
        
        <div className="product-content-wrap">
          <div className="product-category">
            <Link href="/products/ring/">

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
              <span>{currency.symbol} {Math.floor(currency.rate * productPrice).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductShop;
