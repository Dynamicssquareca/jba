import React,{useContext} from "react";
import CurrencyContext from "../../context/CurrencyContext";
 
const OrderProduct = ({ products }) => {
  console.log(products);
 
  const totalAmount = products.reduce((total, product) => {
    // Ensure sub_total is a number
    const productSubtotal = parseFloat(product.sub_total) || 0;
    return total + productSubtotal;
  }, 0);

  const {currency} = useContext(CurrencyContext);
 
  return (
    <div>
      {products.map((product, index) => (
        <div key={index} className="jba-cart-product">
          <div className="p-pic">
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${product.product_image}`}
              alt={product.product_name}
            />
          </div>
          <div className="product-dec">
            <h3 className="success-product-title">{product.product_name}</h3>
            <span className="sku">SKU: {product.product_sku_code}</span>
            <span className="p-price">
              {currency.symbol}{Math.floor(currency.rate*product.amount)}
              {/* {product.oldPrice && (
                <span className="old-p">{currency.symbol} {Math.floor(currency.rate*product.oldPrice)}</span>
              )} */}
            </span>
          </div>
        </div>
      ))}
      <h3 className="total-amount-text text-right">
        Total Amount: {currency.symbol}{Math.floor(currency.rate*totalAmount)}
      </h3>
      <style jsx>{`
        .success-product-title {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};
 
export default OrderProduct;