import React, { useState, useEffect } from "react";
import OrderSuccess from "@/components/ecommerce/OrderSuccess";
import AppURL from "./api/AppUrl";
import { useRouter } from "next/router";
 
const OrderPage = () => {
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { orderId } = router.query;
 
    useEffect(() => {
        const fetchOrderDetails = async () => {
            if (orderId) {
                try {
                    const response = await fetch(AppURL.UserOrderSuccess(orderId));
                    const data = await response.json();
                    if (data.status === 1) {
                        setOrderDetails(data.data);
                    } else {
                        console.error("Failed to fetch order details:", data.message);
                    }
                } catch (error) {
                    console.error("Error fetching order details:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchOrderDetails();
    }, [orderId]);
 
    if (loading) {
        return <div>Loading...</div>;
    }
 
    return orderDetails ? (
        <OrderSuccess orderDetails={orderDetails} />
    ) : (
        <div>Order not found.</div>
    );
};
 
export default OrderPage;