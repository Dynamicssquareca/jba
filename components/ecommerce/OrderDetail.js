
import React from "react";
const OrderDetail = ({orderSummary}) => {
  
  return (
    <div>
      <strong>Shipping Address</strong><br/>
      <span>{orderSummary.name}</span><br/>
      <span>{orderSummary.address_line1} ,{orderSummary.address_line2?orderSummary.address_line2:''},{orderSummary.get_city_name.name},{orderSummary.get_state_name.name} , {orderSummary.get_state_name.country_code} </span><br/>
      <span>{orderSummary.mobile}</span><br/>
      <span>{orderSummary.email}</span><br/>
      <span>{orderSummary.pincode}</span><br/>
    </div>
  );
};

export default OrderDetail;
