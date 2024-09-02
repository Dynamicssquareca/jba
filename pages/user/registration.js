import React, { useState } from "react";
import Breadcrumb from "../../components/layout/Breadcrumb";
import BottomServiceList from "../../components/elements/BottomServiceList";
import Head from "next/head";
import AppURL from '../api/AppUrl';
 
const Registration = () => {
  const API_URL = AppURL.userRegister;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
  });
 
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setapiErrors] = useState('');
 
  const validate = () => {
    const errors = {};
if (!formData.name) errors.name = "Name is required";
if (!formData.email) {
errors.email = "Email is required";
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
errors.email = "Email address is invalid";
    }
    if (!formData.mobile) errors.mobile = "mobile number is required";
    if (!formData.password) errors.password = "Password is required";
    if (formData.password !== formData.password_confirmation) {
      errors.password_confirmation = "Passwords do not match";
    }
    return errors;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          password: formData.password,
          password_confirmation:formData.password_confirmation,
          }),
        });
 
        const data = await response.json();
        setLoading(false);
 
        if (response.ok) {
          setSuccessMessage("Registration successful!");
          localStorage.setItem('authToken', data.data.access_token);
          window.location.replace('/user/dashboard');
           
        } else {
          setapiErrors(data.message || "Registration failed");
        }
      } catch (error) {
        setLoading(false);
        setapiErrors({ apiError: "Something went wrong. Please try again." });
      }
    }
  };
 
  return (
    <div>
      <Head>
        <title>New Registration | JBA</title>
        <meta
          name="description"
          content="Loose Diamond Supplier, Manufacturer & Exporter from India"
        />
      </Head>
       
      <section className="pt-30">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6">
              <div className="jba-login-page jba-registraion-page">
                <div className="jab-log-form jab-regi-form">
                  <h3>
                    Create an account <br />
                    <span>
                      {" "}
                      Already have an account?{" "}
                      <a href="/user/login/"> Log in </a>
                    </span>
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name &&
                        <p className="error">{errors.name}</p>}
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email ID"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                        <p className="error">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-lg-12">
                        <input
                          type="text"
                          name="mobile"
                          placeholder="Enter mobile no."
                          value={formData.mobile}
                          onChange={handleChange}
                        />
                        {errors.mobile && (
                          <p className="error">{errors.mobile}</p>
                        )}
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="con-pass">
                          <input
                            type="password"
                            name="password_confirmation"
                            placeholder="Confirm Password"
                            className="inner-1"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                          />
                          {errors.password_confirmation && (
                            <p className="error">{errors.password_confirmation}</p>
                          )}
                        </div>
                      </div>
                      {apiError && <p className='error'>{apiError}</p>}
                    </div>
                    <button type="submit" className="btn btn-warning">
                      Signup
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="jba-login-page-img">
                <img
                  src="/img/login/login-pic.png"
                  alt="login-img"
                />
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