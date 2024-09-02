import React from "react";
 
const CartItemsUser = ({ order }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        date.setDate(date.getDate() + 7); 
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };
 
    if (Array.isArray(order)) {
        return order.map((item, index) => (
            <div key={index} className="jba-cart-product">
                <div className="p-pic">
                    <a href={`/products/${item.product_slug}`}>
                        <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/${item.product_image}`} alt={item.product_name} />
                    </a>
                </div>
                <div className="product-dec">
                    <h3>
                        <a href={`/products/${item.product_slug}`}>{item.product_name}</a>
                    </h3>
                    <span className="sku">SKU : {item.product_sku_code}</span>
                    <span className="p-price">{item.amount}</span>
                </div>
                <div className="deliver-date deliver-date-s">
                    <img src="/img/themepic/icons/package.png" alt="package" />
                    <span>Delivery by- {formatDate(item.created_at)}</span>
                </div>
                <div className="track-user-or">
                    <span><a href={`/user/order/${item.order_id}`}>Order Details</a></span>
                </div>
            </div>
        ));
    }
};
 
export default CartItemsUser;