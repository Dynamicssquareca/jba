import Link from "next/link";
import React, { useEffect, useState } from "react";
import Search from "../ecommerce/Search";
import LogoutButton from "../user/UserLogout";
import AppURL from "../../pages/api/AppUrl";
const Header = ({ toggleClick, categogry
}) => {
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [cartCount, setCartCount] = useState(0);  
    const [data, setData] = useState();
    const [token, setToken] = useState(null);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    useEffect(() => {
        if (typeof window !== "undefined") {
          const localToken = localStorage.getItem("authToken");
          setToken(localToken);
        }
      }, []);
    const handleToggle = () => setToggled(!isToggled);
    useEffect(() => {
        const fetchCartItems = async () => {
         
            const token = localStorage.getItem("authToken");
            if (token) {
              try {
                const response = await fetch(AppURL.UserCartList, {
                  headers: {
                    "Authorization": `Bearer ${token}`,
                  },
                });
                const data = await response.json();
                if (data.status === 1) {
                    setCartCount(data.cartCount);
                } else {
                  console.error("Failed to fetch cart items.");
                }
              } catch (error) {
                console.error("Error fetching cart items:", error);
              }
            } else {
              
            }
          
        };
     
        fetchCartItems();
      }, []);

    return (
        <>
            <header className="header-area jba-header">
                <div className="Jba-header-top  d-none d-lg-block">
                    <div className="container">
                        <div className="Jba-header-wrap">
                            <div className="logo jba-logo-width">
                                <Link href="/">

                                    <img
                                        src="/img/themepic/jbalogo.png"
                                        alt="logo"
                                        width="180"
                                        height="40"
                                    />

                                </Link>
                            </div>
                            <div className="jba-header-right">
                                <div className="jba-search-head">
                                    <Search />
                                </div>
                                <div className="jba-header-action-right">
                                    <div className="hotline d-none d-lg-flex">
                                        <img
                                            src="/img/themepic/icons/icon-headphone.svg"
                                            alt="hotline"
                                        />

                                        <p>
                                            <a href="tel:+91 8059102341"> +91 805 910 2341</a><span>24/7 Support</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        <div className="Jba-header-wrap header-space-between position-relative">
                            <div className="logo jba-logo-width d-block d-lg-none">
                                <Link href="/">

                                    <img
                                        src="/img/themepic/jbalogo.png"
                                        alt="logo"
                                    />

                                </Link>
                            </div>
                            <div className="mobile-cart-account">
                            <div className="mobile-cart-account-list">
                            <div className="jba-header-action-icon">
                                        <a href="/cart" className="mini-cart-icon">
                                            <img
                                                alt="Evara"
                                                src="/img/themepic/icons/icon-cart.svg"
                                            />
                                            <span className="pro-count blue">
                                            {cartCount}
                                            </span>
                                        </a>
                                        
                                    </div>
                                    <div className="jba-header-action-icon">
                  {token ? (
                    <>
                      <a href="/user/dashboard/">
                        <img className="svgInject" alt="Account" src="/img/themepic/icons/icon-user.svg" />
                        <span className="lable">Account</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <a href="/user/dashboard/">
                              <i className="fi fi-rs-user mr-10"></i> Dashboard
                            </a>
                          </li>
                          <li>
                            <LogoutButton />
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a href="/user/login">
                      <img className="svgInject" alt="Login" src="/img/themepic/icons/icon-user.svg" />
                      <span className="lable">Login</span>
                    </a>
                  )}
                </div>
                </div>
                </div>
                            <div className="header-nav d-none d-lg-flex">
                                
                                <div className="jab-menu jab-menu-padding jab-menu-lh-2 d-none d-lg-block  font-heading">
                                    <nav>
                                        <ul>
                                            <li className="position-static">
                                                <Link href="/">Home</Link>
                                            </li>

                                            <li className="position-static">
                                                <Link href="/products/">

                                                    Shop All


                                                </Link>
                                            </li>

                                            {categogry && categogry.map((item, i) => (

                                                <li key={i}>

                                                    <a href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}> {item.category_name}    <i className="bi bi-chevron-down"></i></a>

                                                    <ul className="sub-menu">

                                                        {item.sub_categories && item.sub_categories.map((items, j) => (

                                                            <li key={j}> <a href={`/subcategory/${items.subcategory_name}-${item.category_name}`.toLowerCase().split(" ").join("-")}>{items.subcategory_name} </a></li>

                                                        ))}

                                                    </ul>





                                                </li>

                                            ))}

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="jba-header-action-right">
                            </div>
                            <div className="jba-header-action-right d-block">
                                <div className="jab-header-pic">
                                    
                                    <div className="jba-header-action-icon">
                                        <a href="/cart" className="mini-cart-icon">
                                            <img
                                                alt="Evara"
                                                src="/img/themepic/icons/icon-cart.svg"
                                            />
                                            <span className="pro-count blue">
                                            {cartCount}
                                            </span>
                                        </a>
                                        
                                    </div>
                                    <div className="jba-header-action-icon">
                  {token ? (
                    <>
                      <a href="/user/dashboard/">
                        <img className="svgInject" alt="Account" src="/img/themepic/icons/icon-user.svg" />
                        <span className="lable">Account</span>
                      </a>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <a href="/user/dashboard/">
                              <i className="fi fi-rs-user mr-10"></i> Dashboard
                            </a>
                          </li>
                          <li>
                            <LogoutButton />
                          </li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <a href="/user/login">
                      <img className="svgInject" alt="Login" src="/img/themepic/icons/icon-user.svg" />
                      <span className="lable">Login</span>
                    </a>
                  )}
                </div>
                                    <div className="jba-header-action-icon d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Header;
