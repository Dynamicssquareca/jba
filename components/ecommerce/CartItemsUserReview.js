import React from "react";

const CartItemsUserReview = ({ items, address }) => {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <div>No item details available.</div>;
  }

  const item = items[0];

  // Format the delivery date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);

    // Add 7 days to the date
    date.setDate(date.getDate() + 7);

    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <div>
      <div className="jba-cart-product jba-cart-product-user">
        <div className="p-pic">
          <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${item.product_image}`} alt={item.product_name} />
        </div>
        <div className="product-dec">
          <h3>{item.product_name || "Product Name"}</h3>
          <span className="sku">SKU : {item.product_sku_code || "N/A"}</span>
          <span className="p-price">
            ₹{item.amount || "0.00"}
          </span>
        </div>
        <div className="deliver-date deliver-date-re">
          <img src="/img/themepic/icons/package.png" alt="package" />
          <span>Delivery by- {formatDate(item.created_at)}</span>
        </div>
      </div>
      <div className="cust-rev">
        <div className="usr-address">
          <h3>Delivery Address</h3>
          <div className="address">
            <span>
              {address.name}<br/>
              {address.address_line1}, {address.address_line2}<br/>
              {address.get_city_name.name}, {address.get_state_name.name}, {address.get_state_name.country_code}<br/>
              {address.mobile}<br/>
              {address.email}<br/>
              {address.pincode}
            </span>
          </div>
        </div>
        <div className="usr-p-price-details">
          <h3>Price Detail</h3>
          <div className="prc">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="text-right">₹{item.sub_total || "0.00"}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="text-right">{item.shipping || "FREE"}</td>
                </tr>
                <tr>
                  <td>Total Cost</td>
                  <td className="text-right">₹{item.sub_total || "0.00"}</td>
                </tr>
                <tr>
                  <td>Payment Method</td>
                  <td className="text-right">Razorpay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsUserReview;