import React, { useState } from 'react';
import CartReturnItemsUser from '../ecommerce/CartReturnItemsUser';



const UserSingleReturn = () => {



  return (
    <div className='order-si-in'>
      <h3>Return Orders</h3>
      <span className='order-id'>Order id: LFHVNKJS450</span>
      <span className='time-place'>Placed on: Placed on 10th Apr 2022</span>
      <div className='cust-card-order'>
      <CartReturnItemsUser />
      </div>
    </div>
  );
}

export default UserSingleReturn;
