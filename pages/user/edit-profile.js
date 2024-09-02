import Head from "next/head";
import Link from "next/link";
import React from "react";
import UserSideBar from "../../components/user/UserSideBar";
import UserProfileInfo from "../../components/user/UserProfileInfo";
import useAuth from '../hooks/useAuth'; 

const EditProfile = () => {
  const { userData, loading } = useAuth();
 
  if (loading) {
    return <div>Loading...</div>; 
  }
 
  if (!userData) {
    return <div>No user data found.</div>;  
  }
    return (
        <>
        <Head>
        <title>Edit Profile | JBA</title>
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
            <span></span>Accounts
            <span></span>Edit Profile
          </div>
        </div>
      </div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10  col-xxl-9 m-auto">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="commen-side-head">
                                    <h1>My Account</h1>
                                </div>
                            </div>
                            <div className="col-xxl-4  col-xl-4 col-lg-5 col-md-4 ">
                               <UserSideBar userData={userData}/>

                            </div>
                            <div className="col-lg-8  col-md-8">
                             <UserProfileInfo userData={userData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    );
}

export default EditProfile;
