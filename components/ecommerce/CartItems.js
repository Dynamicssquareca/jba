import React,{useContext} from "react";
import CurrencyContext from "../../context/CurrencyContext";

const parseCustomDate = (dateString) => {
  const [datePart, timePart] = dateString.split(' ');
  const [day, month, year] = datePart.split('-');
  const [hours, minutes] = timePart.split(':');

  

  let adjustedHours = parseInt(hours, 10);
  if (timePart.includes('PM') && adjustedHours < 12) {
    adjustedHours += 12;
  } else if (timePart.includes('AM') && adjustedHours === 12) {
    adjustedHours = 0;
  }

   
  return new Date(year, month - 1, day, adjustedHours, minutes);
};


const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

 
const formatDate = (date) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(date);  
};

const CartItems = ({ items,onRemoveItem}) => {
  const { currency } = useContext(CurrencyContext);
 
  return (
    <div>
      {items && items.length > 0 ? (
        items.map((item) => {
          
          const createdDate = parseCustomDate(item.created_at);

          
          const deliveryDate = addDays(createdDate, 7);

          return (
            <div key={item.id} className="jba-cart-product">
              <div className="p-pic">
                <a href={`/products/${item.product.product_slug}`}>
                  <img src={item.product.product_back_image_url} alt={item.product.product_name} />
                </a>
              </div>
              <div className="product-dec">
                <h3>
                  <a href={`/products/${item.product.product_slug}`}>
                    {item.product.product_name}
                  </a>
                </h3>
                <span className="sku">SKU: {item.product.product_sku_id}</span>
                <span className="p-price">{currency.symbol} {Math.floor(currency.rate*item.product.product_price)}</span>
              </div>
              <div className="deliver-date">
                <img src="/img/themepic/icons/package.png" alt="package" />
                <span>
                  Delivery by {formatDate(deliveryDate)}
                </span>
              </div>
              <div className="remove-item">
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="btn btn-danger"
                >
                 <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div>No items in the cart.</div>
      )}
    </div>
  );
};

export default CartItems;