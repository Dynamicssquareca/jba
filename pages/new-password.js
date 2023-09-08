import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import BottomServiceList from "../components/elements/BottomServiceList";
import Link from "next/link";
import Head from "next/head";

const NewPassword = () => {
  return (
    <div>
         <Head>
      <title>New Password | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      <Breadcrumb />
      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6 align-self-center">
              <div className="jba-login-page jba-registraion-page">
                <div className="socail-log">
                  <h1>Forget Password</h1>
                 
                </div>
             
                <div className="jab-log-form jab-regi-form">
                
                  <form>
                   
                    
                    <div className="row">
                        <div className="col-lg-6"><input type="password" placeholder=" password" /></div>
                    
                    </div>
                    <div className="row">
                        <div className="col-lg-6"><input type="password" placeholder=" password" /></div>
                    
                    </div>
                  

                    {/* <p>
                      <a className="forget">Forget Password</a>
                    </p> */}
                    <button type="submit" className="btn btn-warning">
                     Send
                    </button>
                    <div className='more-opt'>
                                    <p> Back to   <Link href="/registration/">Login </Link></p>
                                </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="jba-login-page-img">
                <img src="/img/login/login-pic.png" alt="login-img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BottomServiceList />
    </div>
  );
};

export default NewPassword;
