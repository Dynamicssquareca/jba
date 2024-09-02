import React from 'react';
import CartItemsUserReview from '../ecommerce/CartItemsUserReview';
import ProgressSteps from '../elements/ProgressSteps';

const UserSingleOrderInfo = ({ order }) => {
  const steps = ['Order Confirmed', 'Shipped', 'Delivered'];
  const getOrderStatus = () => {
    const salesDetail = order?.cartData?.getsalesdetailchild[0];
    return salesDetail?.order_status || 0; 
  };

   
  const getProgressPercent = (status) => {
    switch (status) {
      case 1:
        return 33; 
      case 2:
        return 66;  
      case 9:
        return 100;  
      default:
        return 0;  
    }
  };

   
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);  
  };

  const orderStatus = getOrderStatus();
  const progressPercent = getProgressPercent(orderStatus);
  const formattedDate = formatDate(order?.cartData?.created_at);

  return (
    <div className='order-si-in'>
      <h3>My Orders</h3>
      <span className='order-id'>Order id: {order?.orderId || 'N/A'}</span>
      <span className='time-place'>Placed on: {formattedDate || 'N/A'}</span>
      <ProgressSteps steps={steps} progressPercent={progressPercent} />
      <div className='cust-card-order'>
        <CartItemsUserReview items={order?.cartData?.getsalesdetailchild || []} address={order.cartData}/>
      </div>
    </div>
  );
}

export default UserSingleOrderInfo;