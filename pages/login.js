import React from 'react';
import Breadcrumb from '../components/layout/Breadcrumb';
import BottomServiceList from '../components/elements/BottomServiceList';
import Link from 'next/link';
import Head from "next/head";



const Login = () => {
    return (
        <div>
               <Head>
      <title>Log in | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
            <Breadcrumb />
            <section className='ptb-60'>
                <div className='container'>
                   <div className='row g-0 bg0'>
                   <div className='col-lg-6 align-self-center'>
                        <div className='jba-login-page'>
                            <div className='socail-log'>
                                <h1>Login With</h1>
                                <div className='social-ions-log-btn'>
                                <button type="button" className="btn btn-warning btn-blue"><i className="bi bi-facebook"></i> Login with Facebook</button>
                                <button type="button" className="btn btn-warning btn-white"><i className="bi bi-google"></i> Login with Google</button>
                                </div>
                            </div>
                            <div className='jba-div'>
                            Or 
                            </div>
                            <div className='jab-log-form'>
                                <h3>Login with Detail</h3>
                                <form>
                                <input
                                type="email"
                                placeholder="Email ID"
                                />
                                 <input
                                type="password"
                                placeholder="Password"
                                /> 
                                <p><Link href="/forget-password/"><a className='forget'>Forget Password</a></Link></p>
                                 <button type="submit" className="btn btn-warning">Login</button>
                                </form>
                                <div className='more-opt'>
                                    <p>New to JewelsByAnu ?  <Link href="/registration/">Create an Account</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='jba-login-page-img'>
                         <img src='/img/login/login-pic.png' alt='login-img' />
                        </div>
                    </div>
                   </div>
                </div>
            </section>
            <BottomServiceList />
        </div>
    );
}

export default Login;
