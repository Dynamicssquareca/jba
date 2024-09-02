import React, { useEffect, useState } from 'react';
import CartItemsUser from '../ecommerce/CartItemsUser';
import AppURL from '@/pages/api/AppUrl';
 
const UserAccOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        window.location.replace('/user/login');  
        return;
      }
 
      try {
        const response = await fetch(AppURL.UserOrders, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response) {
          const data = await response.json();
          if (data.status === 1) {
            setOrders(data.data); 
          } else {
            console.error('Failed to fetch orders.');
          }
        } else {
          console.error('Failed to fetch orders.');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };
 
    fetchOrders();
  }, []);
 
  if (loading) {
    return <div>Loading orders...</div>;  
  }
 
  if (orders.length === 0) {
    return <div>No orders found.</div>; 
    
  }
 
  return (
    <div className='user-order'>
        {orders.map((order, index) => (
                order.getsalesdetailchild &&  
                <CartItemsUser key={index} order={order.getsalesdetailchild} />
            ))}
    </div>
  );
}
 
export default UserAccOrder;