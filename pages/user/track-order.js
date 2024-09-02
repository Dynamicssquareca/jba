import Head from "next/head";
import Link from "next/link";
import React from "react";
import UserSideBar from "../../components/user/UserSideBar";
import UserAccTrackOrder from "../../components/user/UserAccTrackOrder";

const TrackOrder = () => {
  return (
    <>
      <Head>
        <title>Track Order | JBA</title>
        <meta
          name="description"
          content="Loose Diamond Supplier, Manufacturer & Exporter from India"
        />
      </Head>
      <div className="page-header breadcrumb-wrap mb-50">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">
            Home
            </a>
            <span></span>User
            <span></span>Track Order
          </div>
        </div>
      </div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10  col-xxl-9 m-auto">
                        <div className="row">
                           
                            <div className="col-lg-12  col-md-8">
                             <UserAccTrackOrder />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TrackOrder;
