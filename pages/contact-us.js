import React, { useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import BottomServiceList from "../components/elements/BottomServiceList";
import emailjs from '@emailjs/browser';


const Contactus = () => {
  const form = useRef();
  const sendEmail = (e) => {
    document.getElementById("csbt_btn").value = "Please Wait...";
    document.getElementById("csbt_btn").disabled = true;
    e.preventDefault();
    emailjs.sendForm('service_gvm1zn1', 'template_9exa54k', form.current, 'yo9bM5CUxYemLyrDd')
      .then((result) => {
        console.log(result.text);
        document.getElementById("contactForm").reset();


        document.getElementById("successCMsg").innerHTML = "Message has been sent successfully ,We get in touch as soon as possible!";
        document.getElementById("csbt_btn").value = "Send";
        document.getElementById("csbt_btn").disabled = false;
        //   setTimeout(
        //     function(){
        //         window.location = "/" 
        //     },
        // 3000);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <Head>
        <title>Contact-us | JBA</title>
        <meta
          name="description"
          content="Loose Diamond Supplier, Manufacturer & Exporter from India"
        />
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span></span>Contact US
          </div>
        </div>
      </div>

      <section className="ptb-60">
        <div className="container">
          <div className="row g-0 bg0">
            <div className="col-lg-6 align-self-center">
              <div className="jba-login-page jba-contact-us">
                <div className="socail-log">
                  <h1>Contact Us</h1>
                </div>
                <span id="successCMsg"></span>
                <div className="jab-log-form jab-regi-form">
                  <form id="contactForm" ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-12">

                        <input type="text" name="name" placeholder="Enter Your Name" required />
                      </div>
                      <div className="col-lg-12">

                        <input type="email" name="email" placeholder="Enter Your Email Id" required />
                      </div>
                      <div className="col-lg-12">

                        <input type="text" name="phone" placeholder="Enter Your Phone Number" required />
                      </div>
                      <div className="col-lg-12">

                        <textarea name="message" placeholder="Enter Your Message" required></textarea>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-check dd-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  required />
                          <label className="form-check-label" for="flexCheckChecked">
                            I have read and agree to the <b><a href="https://www.jewelsbyanu.com/policy/"
                              target="_blank">Privacy Policy</a></b> and <b><a href="https://www.jewelsbyanu.com/terms-and-conditions/" target="_blank">Terms of Service</a></b>.
                          </label>
                        </div>
                      </div>
                    </div>
                    <input type="submit" id="csbt_btn" className="btn btn-warning" value="Send" />
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

      <section className="p-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="new-header">Our Locations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <div className="content-right">
                  180 Talmadge Road Igo Bldg <br /> Suite501 <br /> Edison NJ, 08817
                </div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-telephone"></i>
                </div>
                <div className="content-right">+91 805 910 2341</div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-clock"></i>
                </div>
                <div className="content-right"> Mon-Sat: 9 AM - 5 PM</div>
              </div>
              <div className="contact-list">
                <div className="icons-left">
                  <i className="bi bi-envelope"></i>
                </div>
                <div className="content-right">
                  <a href="mailto:info@dynamicssquare.com">
                    info@jewelsbyanu.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomServiceList />
    </div>
  );
};

export default Contactus;
