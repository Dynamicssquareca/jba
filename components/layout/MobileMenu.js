import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../utils/outsideClick";


const MobileMenu = ({ isToggled, toggleClick, categogry }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">

                                <img
                                    src="/img/themepic/jbalogo.png"
                                    alt="logo"
                                />

                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">

                        <div className="mobile-menu-wrap mobile-header-border">


                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li className="position-static">
                                        <a href="/">Home</a>
                                    </li>
                                    <li><a href="/products/">Shop All</a></li>
                                    {/* <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(1)}
                                        >
                                           <i className="bi bi-chevron-down"></i>
                                        </span>
                                        <Link href="">
                                            Home 
                                        </Link>
                                        <ul
                                            className={
                                                isActive.key == 1
                                                    ? "dropdown"
                                                    : "d-none"
                                            }
                                        >
                                            <li>
                                                <Link href="">
                                                     Home 1 
                                                </Link>
                                            </li>
                                             
                                        </ul>
                                    </li> */}
                                    {/* <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(2)}
                                        >
                                            <i className="fi-rs-angle-small-down"></i>
                                        </span>
                                      </li>  */}

                                    {categogry && categogry.map((item, i) => (
                                        <li key={i} className={
                                            isActive.key == item.id
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }>
                                            <a href={`/category/${item.category_name}`.toLowerCase().split(" ").join("-")}>

                                                {item.category_name}
                                                {/* <i className="bi bi-chevron-down"></i> */}

                                            </a>
                                            <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(item.id)}
                                        >
                                           <i className="bi bi-chevron-down"></i>
                                        </span>
                                            <ul className={
                                                isActive.key == item.id
                                                    ? "dropdown"
                                                    : "d-none"
                                            }>
                                                {item.sub_categories && item.sub_categories.map((items, j) => (

                                                    <li key={j}> <a href={`/subcategory/${items.subcategory_name}-${item.category_name}`.toLowerCase().split(" ").join("-")}>{items.subcategory_name} </a></li>

                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        {/* <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="">
                                     Our location  
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="">
                                     Log In / Sign Up  
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="#">
                                     (+01) - 2345 - 6789 
                                </Link>
                            </div>
                        </div> */}
                        {/* <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Follow Us</h5>
                            <Link href="#">
                                
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                
                            </Link>
                            <Link href="#">
                                
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                
                            </Link>
                            <Link href="#">
                                
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                
                            </Link>
                            <Link href="#">
                                
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                
                            </Link>
                            <Link href="#">
                                
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                               
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
