import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import BottomServiceList from '../../components/elements/BottomServiceList';
import Head from 'next/head';
import AppURL from '../api/AppUrl';
import { useRouter } from 'next/router';

const Login = () => {
    const API_URL = AppURL.UserLogin;
    const router = useRouter();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            window.location.replace('/user/dashboard');
        }
    }, [router]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('authToken', data.data.access_token);
                window.location.replace('/user/dashboard');
            } else {
                setLoginError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('An error occurred', error);
            setLoginError('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <div>
            <Head>
                <title>Log in | JBA</title>
                <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
            </Head>
           
            <section className='ptb-60'>
                <div className='container'>
                    <div className='row g-0 bg0'>
                        <div className='col-lg-6 pt-40'>
                            <div className='jba-login-page'>
                                <div className='jab-log-form'>
                                    <h3>Login with Detail</h3>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="email"
                                            placeholder="Email ID"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errors.email && <p className='error'>{errors.email}</p>}
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.password && <p className='error'>{errors.password}</p>}
                                        {loginError && <p className='error'>{loginError}</p>}
                                        <p><a href="/user/forgot-password/" className='forget'>Forgot Password</a></p>
                                        <button type="submit" className="btn btn-warning">Login</button>
                                    </form>
                                    <div className='more-opt'>
                                        <p>New to JewelsByAnu? <a href="/user/registration/">Create an Account</a></p>
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
};

export default Login;