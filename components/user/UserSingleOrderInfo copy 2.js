import React, { useState } from 'react';
import CartReturnItemsUser from '../ecommerce/CartReturnItemsUser';
import ProgressSteps from '../elements/ProgressSteps';
import Link from 'next/link';



const UserSingleOrderInfo = () => {
  const steps = ['Order Confirmed', 'Shipped', 'Delivered'];

  const [progressPercent, setProgressPercent] = useState(34); // Default progress percentage is set to 33%
  const handleInputChange = (e) => {
    const percent = parseInt(e.target.value);
    if (!isNaN(percent) && percent >= 0 && percent <= 100) {
      setProgressPercent(percent);
    }
  };


  return (
    <div className='order-si-in'>
      <h3>My Orders</h3>
      <span className='order-id'>Order id: LFHVNKJS450 <Link href="/myaccounts/track-order/"><a>Track Order</a></Link></span>
      <span className='time-place'>Placed on: Placed on 10th Apr 2022</span>
      <ProgressSteps steps={steps} progressPercent={progressPercent} />
      <div className='cust-card-order'>
      <CartReturnItemsUser />
      </div>
    </div>
  );
}

export default UserSingleOrderInfo;
