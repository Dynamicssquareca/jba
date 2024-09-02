import React ,{useContext} from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import OrderProduct from "components/ecommerce/OrderProduct";
import OrderDetail from "components/ecommerce/OrderDetail";

 
const OrderSuccess = ({ orderDetails }) => {
    const router = useRouter();
 
    const handleContinueShopping = () => {
        router.push("/shop");
    };
    

 
    return (
        <>
            <Head>
                <title>Order Success | JBA</title>
                <meta name="description" content="Thank you for your order!" />
            </Head>
            <div className="page-header breadcrumb-wrap mt-50 mb-50">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">Home</a>
                        <span></span>Order Success
                    </div>
                </div>
            </div>
            <section className="order-success-section">
                <div className="container">
                    <h1 className="heading-cart text-center">Order Placed Successfully!</h1>
                    <h2 className="order-id-text text-center mb-4">Order ID #{orderDetails?.orderId || 'N/A'}</h2>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="cart-righ-b">
                                        <h6 className="mb-3">Order Details</h6>
                                        <OrderProduct products={orderDetails?.cartData?.getsalesdetailchild || []} />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <h6 className="mb-3">Order Summary</h6>
                                    <OrderDetail orderSummary={orderDetails?.cartData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .order-success-box {
                        background: #fff;
                        padding: 50px;
                        border-radius: 10px;
                        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
                    }
                    .heading-cart {
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 10px;
                    }
                    .order-details {
                        text-align: left;
                        margin-top: 30px;
                    }
                    .order-details h2 {
                        font-size: 22px;
                        margin-bottom: 20px;
                    }
                    .product-list {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .product-item {
                        display: flex;
                        justify-content: space-between;
                        padding: 10px 0;
                        border-bottom: 1px solid #e5e5e5;
                    }
                    .order-total {
                        margin-top: 20px;
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .check-out {
                        margin-top: 50px;
                    }
                    .check-out .btn {
                        padding: 10px 30px;
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .order-id-text {
                        font-size: 18px;
                        font-weight: normal;
                        margin-bottom: 10px;
                    }
                `}</style>
            </section>
        </>
    );
};
 
export default OrderSuccess;