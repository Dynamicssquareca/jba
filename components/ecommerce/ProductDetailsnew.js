import React, { useState, useRef,useContext } from "react";
import RelatedProduct from "./RelatedProduct";
import { useRouter } from 'next/router';
import { Button, Modal, ModalHeader, ModalBody, TabContent, Row,Col,TabPane, Nav, NavItem, NavLink, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import emailjs from '@emailjs/browser';
import AppURL from "@/pages/api/AppUrl";
import classnames from 'classnames';
import CurrencyContext from "../../context/CurrencyContext";
 
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from "reactstrap";
import ThumbSlider from "../sliders/Thumb";

const ProductDetailsnew = ({ productData, relatedproduct, productreview, args, purity, attribute, formattedPrice }) => {
  const form = useRef();
  const [product_name] = useState(productData[0]['product_name']);
  const [product_sku] = useState(productData[0]['product_sku_id']);
  const [product_short_description] = useState(productData[0]['product_short_description']);
  const [product_price] = useState(productData[0]['product_price']);
  const [product_description] = useState(productData[0]['product_description']);
  const [product_front_image] = useState(productData[0]['product_front_image_url']);
  const [product_back_image] = useState(productData[0]['product_back_image_url']);
  const [product_quantity] = useState(productData[0]['product_quantity']);
  const [relatedProductData] = useState(relatedproduct);
  const [productreviewData] = useState(productreview);
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});
  const [apiErrors, setApiErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { currency } = useContext(CurrencyContext);

  const Modaltoggles = () => setModal(!modal);
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const router = useRouter();

  const validateLogin = () => {
    const errors = {};
    if (!loginEmail) errors.email = "Email is required";
    if (!loginPassword) errors.password = "Password is required";
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateRegistration = () => {
    const errors = {};
    if (!registerName) errors.name = "Name is required";
    if (!registerEmail) errors.email = "Email is required";
    if (!registerPassword) errors.password = "Password is required";
    if (registerPassword !== confirmPassword) errors.confirmPassword = "Passwords must match";
    if (!mobileNumber) errors.mobileNumber = "Mobile number is required";
    setRegisterErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (validateLogin()) {
      setLoading(true);
      try {
        const response = await fetch(AppURL.UserLogin, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: loginEmail,
            password: loginPassword ,
             
          }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          alert("Login successful! You can now add items to your cart.");
          localStorage.setItem('authToken', data.data.access_token);
          setModal(false);
        } else {
          setApiErrors(data || "Registration failed");
        }
      } catch (error) {
        setLoading(false);
        setApiErrors(data || "Registration failed");
      }
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (validateRegistration()) {
      setLoading(true);
      try {
        const response = await fetch(AppURL.userRegister, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: registerName,
            email: registerEmail,
            mobile: mobileNumber,
            password: registerPassword,
            password_confirmation: confirmPassword,
          }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
          alert("Registration successful!");
          localStorage.setItem('authToken', data.data.access_token);
          setModal(false);
        } else {
          setApiErrors(data || "Registration failed");
        }
      } catch (error) {
        setLoading(false);
        setApiErrors(data || "Registration failed");
      }
    }
  };

  const sendEmail = (e) => {
    document.getElementById("sbt_btn").value = "Please Wait...";
    document.getElementById("sbt_btn").disabled = true;
    e.preventDefault();
    emailjs.sendForm('service_h57c39c', 'template_fye9r67', form.current, 'x0is57RTi-I26GcCh')
      .then((result) => {
          console.log(result.text);
          document.getElementById("requestForm").reset();
          document.getElementById("successMsg").innerHTML = "Your requirement has been sent successfully. We will get in touch as soon as possible!";
          document.getElementById("sbt_btn").value = "Get a Quote";
          document.getElementById("sbt_btn").disabled = false;
      }, (error) => {
          console.log(error.text);
      });
  };

  const product = {
    id: productData[0]['id'],
  };

  const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };

  const handleAddToCart = async () => {
    if (!isAuthenticated()) {
      Modaltoggles();
      return;
    }
    
    try {
      const response = await fetch(AppURL.UserAddtoCart, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          product_id: product.id,
          quantity: 1,
        }),
      });

      if (response.ok) {
        window.location.replace('/cart');
      } else {
        console.error('Failed to add to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleTabChange = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <section className="mb-50">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="jba-product-main">
              <div className="row mb-50 mt-30">
                <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery sticky-top-product">
                    <div className="product-image-slider">
                      <ThumbSlider imageOne={product_front_image} imageTwo={product_back_image} productName={product_name} />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="jba-detail-single pr-30 pl-30">
                    <div className="prodcts-single-rating">
                      <div className="jba-rating-product">
                        {productreviewData && productData.length >= 0 && (
                          <div className="rating-star">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
                            <i className="bi bi-star"></i>
                            <span className="rating-fig">4.8 | </span>
                            <span className="review-prod">Review (148)</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="jba-single-dec">
                      <div className="heading">
                        <h1>{product_name}</h1>
                        <span>SKU: {product_sku}</span>
                        <p>{product_short_description}</p>
                        {Number(product_quantity)>0? ( <span>In stock</span>) :<span>Out of stock</span>}
                      </div>
                    </div>
                    <div className="jab-product-sigle-price">
                    <span className="orginal-price">{currency.symbol}{Math.floor(currency.rate * product_price).toLocaleString('en-IN')}</span>
                    </div>
                    
                    <div className="add-t-cart">
                      <a href="tel:+918059102341">
                        <button
                          className="btn btn-1"
                          type="button"
                          id="button-addon1"
                        >
                          <i className="bi bi-telephone m-1"></i>Call Now 
                        </button>
                      </a>
                      {Number(product_quantity)>0?(<button
                        className="btn btn-2"
                        type="button"
                        id="button-addon2"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </button>): ''}
                      
                      <Modal isOpen={modal} toggle={Modaltoggles} {...args} size="md">
                        <ModalHeader toggle={Modaltoggles}>Login / Register</ModalHeader>
                        <ModalBody>
                          <Nav tabs>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === 'login' })}
                                onClick={() => handleTabChange('login')}
                              >
                                Login
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={classnames({ active: activeTab === 'register' })}
                                onClick={() => handleTabChange('register')}
                              >
                                Register
                              </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={activeTab}>
                            <TabPane tabId="login">
                              {/* Login Form */}
                              <Form onSubmit={handleLoginSubmit}>
                                <FormGroup>
                                  <Label for="loginEmail">Email</Label>
                                  <Input
                                    type="email"
                                    id="loginEmail"
                                    placeholder="Enter Email Id"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    invalid={!!loginErrors.email}
                                  />
                                  <FormFeedback>{loginErrors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                  <Label for="loginPassword">Password</Label>
                                  <Input
                                    type="password"
                                    id="loginPassword"
                                    placeholder="Enter Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    invalid={!!loginErrors.password}
                                  />
                                  <FormFeedback>{loginErrors.password}</FormFeedback>
                                </FormGroup>
                                {apiErrors.message && <div className="text-danger">{apiErrors.message}</div>}
                                <Button type="submit" color="primary" disabled={loading}>
                                  {loading ? "Logging in..." : "Login"}
                                </Button>
                                {successMessage && <div className="text-success mt-2">{successMessage}</div>}
                              </Form>
                            </TabPane>
                            <TabPane tabId="register">
                              {/* Register Form */}
                              <Form onSubmit={handleRegisterSubmit}>
                              <Row form>
                              <Col md={6}>
                                <FormGroup>
                                  <Label for="registerName">Name</Label>
                                  <Input
                                    type="text"
                                    id="registerName"
                                    placeholder="Enter Name"
                                    value={registerName}
                                    onChange={(e) => setRegisterName(e.target.value)}
                                    invalid={!!registerErrors.name}
                                  />
                                  <FormFeedback>{registerErrors.name}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                  <Label for="registerEmail">Email</Label>
                                  <Input
                                    type="email"
                                    id="registerEmail"
                                    placeholder="Enter Email Id"
                                    value={registerEmail}
                                    onChange={(e) => setRegisterEmail(e.target.value)}
                                    invalid={!!registerErrors.email}
                                  />
                                  <FormFeedback>{registerErrors.email}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                  <Label for="registerPassword">Password</Label>
                                  <Input
                                    type="password"
                                    id="registerPassword"
                                    placeholder="Enter Password"
                                    value={registerPassword}
                                    onChange={(e) => setRegisterPassword(e.target.value)}
                                    invalid={!!registerErrors.password}
                                  />
                                  <FormFeedback>{registerErrors.password}</FormFeedback>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                  <Label for="confirmPassword">Confirm Password</Label>
                                  <Input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Enter Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    invalid={!!registerErrors.confirmPassword}
                                  />
                                  <FormFeedback>{registerErrors.confirmPassword}</FormFeedback>
                                </FormGroup>
                                </Col>
                                </Row>
                                <FormGroup>{loading}
                                  <Label for="mobileNumber">Mobile Number</Label>
                                  <Input
                                    type="text"
                                    id="mobileNumber"
                                    placeholder="Enter Mobile Number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    invalid={!!registerErrors.mobileNumber}
                                  />
                                  <FormFeedback>{registerErrors.mobileNumber}</FormFeedback>
                                </FormGroup>
                                 {apiErrors.message && <div className="text-danger">{apiErrors.message}</div>}
                                 <Button type="submit" color="primary" disabled={loading}>
                                  {loading ? "Registering..." : "Register"}
                                </Button>
                              </Form>
                            </TabPane>
                          </TabContent>
                        </ModalBody>
                      </Modal>
                    </div>
                    <div className="jba-our-exp">
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{ pointerEvents: 'none' }}>
                            <source src="/videos/Exuisite-Craftmanship.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <span>
                          Exquisite <br /> Craftsmanship
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{ pointerEvents: 'none' }}>
                            <source src="/videos/Bis-logo.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <span>
                          100% Hallmarked <br /> Jewelry
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{ pointerEvents: 'none' }}>
                            <source src="/videos/Giftworthy-packaging.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <span>
                          Gift-Worthy <br /> Packaging
                        </span>
                      </div>
                    </div>
                    <div className="jba-prod-dec-bootm-acc">
                      <Accordion
                        className="jab-accordion"
                        open={open}
                        toggle={toggle}
                      >
                        <AccordionItem>
                          <AccordionHeader targetId="1" tag="h3">
                            Special Offers
                          </AccordionHeader>
                          <AccordionBody accordionId="1">
                            <div className="jba-discount-info-box">
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FLAT20</span>
                                <span className="h-tag">
                                  Get 20% OFF on First Purchase
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                              <div className="jba-discount-info">
                                <span className="h-tag-h">FESTIVE10</span>
                                <span className="h-tag">
                                  Festive offer Get 10% OFF
                                </span>
                                <span className="h-tag-term">
                                  <a href="#"> Term & Conditions</a>
                                </span>
                              </div>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                          <AccordionHeader targetId="2" tag="h3">
                            Product Description
                          </AccordionHeader>
                          <AccordionBody accordionId="2">
                            <div className="pro-single-details-inf">
                              <div className="pro-list-1" dangerouslySetInnerHTML={{ __html: product_description }} />
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                        {productreviewData && productreviewData.length >= 0 && (
                          <AccordionItem>
                            <AccordionHeader targetId="3" tag="h3">
                              Reviews
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                              <div className="user-prd-comm">
                                {productreviewData.map((review, index) => (
                                  <div className="rept-col" key={index}>
                                    <span>{review.username}</span>
                                    <p>{review.comment}</p>
                                  </div>
                                ))}
                                <div className="action-comment">
                                  <button type="button" className="btn btn-lg btn-warning my-rev">Add Your Review</button>
                                </div>
                              </div>
                            </AccordionBody>
                          </AccordionItem>
                        )}
                      </Accordion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-60">
          <div className="col-12">
            <h3 className="section-title style-1 mb-30">Related products</h3>
          </div>
          <div className="col-12">
            <div className="row related-products position-relative">
              {relatedProductData && relatedProductData.length >= 0 && (
                <RelatedProduct productrelatedData={relatedProductData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsnew;