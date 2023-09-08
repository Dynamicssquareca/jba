import React from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import BottomServiceList from "../components/elements/BottomServiceList";
import Link from "next/link";
import Head from "next/head";

const Registration = () => {
  return (
    <div>
         <Head>
      <title>New Registration | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      
      <Breadcrumb />
      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6 align-self-center">
              <div className="jba-login-page jba-registraion-page">
                <div className="socail-log">
                  <h1>Continue With</h1>
                  <div className="social-ions-log-btn">
                    <button type="button" className="btn btn-warning btn-blue">
                      <i className="bi bi-facebook"></i> Login with Facebook
                    </button>
                    <button type="button" className="btn btn-warning btn-white">
                      <i className="bi bi-google"></i> Login with Google
                    </button>
                  </div>
                </div>
                <div className="jba-div">Or</div>
                <div className="jab-log-form jab-regi-form">
                  <h3>
                    Create an account <br />
                    <span>
                      {" "}
                      Already have an account?{" "}
                      <Link href="/login/">
                        Log in
                      </Link>
                    </span>
                  </h3>
                  <p></p>
                  <form>
                   
                    
                    <div className="row">
                        <div className="col-lg-6"> <input type="text" placeholder="Enter Your Name" /></div>
                        <div className="col-lg-6"><input type="email" placeholder="Email ID" /></div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input type="password" placeholder="Password" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="password"
                            placeholder="Conform Password"
                            className="inner-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input type="text" placeholder="Enter Captcha" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="text"
                            className="inner-2"
                            placeholder="x7453b"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>

                    {/* <p>
                      <a className="forget">Forget Password</a>
                    </p> */}
                    <button type="submit" className="btn btn-warning">
                      Signup
                    </button>
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

export default Registration;
