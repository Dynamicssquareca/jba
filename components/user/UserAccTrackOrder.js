import React, { useState } from 'react';
import AppURL from '@/pages/api/AppUrl';
import UserTrackOrderDetails from './UserTrackOrderDetails'; // Adjust the path if necessary
import { useRouter } from 'next/router';

const UserAccTrackOrder = () => {
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const OnhandleSubmit = async (event) => {
        event.preventDefault();

        if (!orderId.trim()) {
            setLoginError('Order ID cannot be empty.');
            return;
        }

        setLoading(true);
        setLoginError(''); // Clear previous errors

        try {
            const response = await fetch(AppURL.UserTrackOrder(orderId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add other headers if needed
                },
            });

            if (!response) {
                const errorText = await response.text(); // Read response text for error details
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const result = await response.json();

            if (result.status === 1 && result.data) {
                // Extract cartData from result.data
                const { cartData } = result.data;
                const a = cartData?.getsalesdetailchild
                console.log(a.length)
                setOrderDetails(cartData);
            } else {
                setLoginError('Order not found. Please check your Order ID.');
            }
        } catch (error) {
            console.error('An error occurred', error);
            setLoginError('An unexpected error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='user-track'>
                <h3>Track My Order</h3>
                <div className="mb-3 form-track">
                    <form onSubmit={OnhandleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="OrderId"
                            placeholder="Enter Order ID"
                            value={orderId}
                            onChange={(e) => setOrderId(e.target.value)}
                        />
                        <input
                            type='submit'
                            className='btn btn-md'
                            value={loading ? "Submitting..." : "Submit"}
                            disabled={loading}
                        />
                    </form>
                    {loginError && <div className="error-message">{loginError}</div>}
                </div>
                {orderDetails && (
                    <UserTrackOrderDetails
                        items={orderDetails?.getsalesdetailchild}  
                        address={orderDetails} Subtotal={orderDetails} 
                    />
                )}
            </div>
        </>
    );
};

export default UserAccTrackOrder;