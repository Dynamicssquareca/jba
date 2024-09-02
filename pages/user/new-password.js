import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/layout/Breadcrumb';
import BottomServiceList from '../../components/elements/BottomServiceList';
import Link from "next/link";
import Head from "next/head";
import AppURL from "../api/AppUrl";
 
const NewPassword = () => {
  const router = useRouter();
  const { token } = router.query;
 
  const [formData, setFormData] = useState({
    email: "",
    token: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    if (token) {
      const [actualToken, emailPart] = token.split('/email=');
      const email = decodeURIComponent(emailPart);
      setFormData((prevData) => ({
        ...prevData,
        email: email,
        token: actualToken,
      }));
    }
  }, [token]);
 
  const validate = () => {
    const errors = {};
if (!formData.email) {
errors.email = "Email is required";
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
errors.email = "Email address is invalid";
    }
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
        const response = await fetch(AppURL.UserResetPassword, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        setLoading(false);
        if (response.ok) {
          setSuccessMessage("Password reset successful!");
          alert('Password reset successful!');
        } else {
          setErrors({ apiError: data.message || "Password reset failed" });
        }
      } catch (error) {
        setLoading(false);
        setErrors({ apiError: "Something went wrong. Please try again." });
      }
    }
  };
 
  return (
    <div>
      <Head>
        <title>New Password | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6">
              <div className="jba-login-page jba-registraion-page">
                <div className="socail-log">
                  <h1>Forgot Password</h1>
                </div>
                <div className="jab-log-form jab-regi-form">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          type="password"
                          name="password_confirmation"
                          placeholder="Confirm Password"
                          value={formData.password_confirmation}
                          onChange={handleChange}
                        />
                        {errors.password_confirmation && <p className="error">{errors.password_confirmation}</p>}
                      </div>
                    </div>
                    <button type="submit" className="btn btn-warning" disabled={loading}>
                      {loading ? 'Sending...' : 'Send'}
                    </button>
                    {errors.apiError && <p className="error">{errors.apiError}</p>}
                    {successMessage && <p className="success">{successMessage}</p>}
                    <div className='more-opt'>
                      <p>Back to <Link href="/user/registration/">Login</Link></p>
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