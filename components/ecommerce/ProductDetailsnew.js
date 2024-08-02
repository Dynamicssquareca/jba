import React, { useState ,useRef} from "react";
import RelatedSlider from "../sliders/Related";
import RelatedProduct from "./RelatedProduct";
import { useRouter } from 'next/router';
import { Button, Modal, ModalHeader, ModalBody, Spinner } from "reactstrap";
import emailjs from '@emailjs/browser';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Table
} from "reactstrap";
import ThumbSlider from "../sliders/Thumb";

const ProductDetailsnew = ({productData,relatedproduct,productreview,args,purity,attribute}) => {
  const form = useRef();
  const[product_name] = useState(productData[0]['product_name']);
  const[product_sku] = useState(productData[0]['product_sku_id']);
  const[product_short_description] = useState(productData[0]['product_short_description']);
  const[product_price] = useState(productData[0]['product_price']);
  const[product_description] = useState(productData[0]['product_description']);
  const[product_front_image] = useState(productData[0]['product_front_image_url']);
  const[product_back_image] = useState(productData[0]['product_back_image_url']);
  const[relatedProductData] = useState(relatedproduct);
  const[productreviewData] = useState(productreview);
  const [modal, setModal] = useState(false);
  
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
  const sendEmail = (e) => {
    document.getElementById("sbt_btn").value = "Please Wait...";
    document.getElementById("sbt_btn").disabled = true;
    e.preventDefault();
    emailjs.sendForm('service_h57c39c', 'template_fye9r67', form.current, 'x0is57RTi-I26GcCh')
      .then((result) => {
          console.log(result.text);
          document.getElementById("requestForm").reset();
          

          document.getElementById("successMsg").innerHTML = "Your requirement has been Sent Successfully ,We get in touch as soon as possible!";
          document.getElementById("sbt_btn").value ="Get a Quote";
          document.getElementById("sbt_btn").disabled = false;
        //   setTimeout(
        //     function(){
        //         window.location = "/" 
        //     },
        // 3000);
      }, (error) => {
          console.log(error.text);
      });
  };
  const handleClick = () => {
    router.push('/cart/');
  };

  return (
    <section className="mb-50">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="jba-product-main">
              <div className="row mb-50  mt-30">
                <div className="col-md-5 col-sm-12 col-xs-12 mb-md-0 mb-sm-5">
                  <div className="detail-gallery sticky-top-product">
                    {/* <span className="zoom-icon">
                      <i className="bi bi-search"></i>
                    </span> */}

                    <div className="product-image-slider">
                      <ThumbSlider imageOne={product_front_image} imageTwo={product_back_image} productName={product_name}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="jba-detail-single  pr-30 pl-30">
                    <div className="prodcts-single-rating">
                      <div className="jba-rating-product">
                        {productreviewData && productData.length >=0 && (
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
                        <p> {product_short_description} </p>
                      </div>
                    </div>
                    
                    <div className="jab-product-sigle-price">
                      <span className="orginal-price">$ {product_price}</span>
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
                      <button
                        className="btn btn-2"
                        type="button"
                        id="button-addon2"
                        onClick={Modaltoggles}
                      >
                        Get a Quote
                      </button>
                      <Modal isOpen={modal} toggle={Modaltoggles} {...args} size="md">
                      <ModalHeader toggle={Modaltoggles}>Request Callback</ModalHeader>
                      <ModalBody>
                        <p id="successMsg"></p>
                      <form id="requestForm" className="row g-3"  ref={form} onSubmit={sendEmail}>
                      <div className="col-md-12">
                        <input type="hidden" name="product_name" value={product_name} />
                        <input type="hidden" value={router.asPath} name="url" />
                      <input type="text" className="form-control" name="name" placeholder="Enter Full Name" required/>
                      </div>
                      <div className="col-12">
                      <input type="email" className="form-control"  name="email" placeholder="Enter Email ID" required/>
                      </div>
                      <div className="col-12">
                      <input 
                      type="text" 
                      className="form-control" 
                      name="phone" 
                      minLength={10}
                      maxLength={12}
                      onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                      }
                      }} 
                      placeholder="Enter Phone Number" required/>
                      </div>
                       <div className="col-6">
                      <select className="form-control" name="size">
                      <option value="Choose an option">Select Option</option>
                      {attribute && attribute.map((items,i)=>(
                      <option value={items.attribute_name} key={i}>{items.attribute_name}</option>
                      ))}
                      </select>
                       </div>
                       <div className="col-6" >
                       <select className="form-control" name="purity">
                       <option value="Choose an option">Select Purity</option>
                       {purity && purity.map((item,i)=>(
                       <option value={item.purity_name} key={i}>{item.purity_name}</option> 
                       ))}
                       </select>
                       </div>
                       <div className="col-12">
                        <textarea  rows="4" cols="400" className="form-control" name="message" placeholder="Message" required/>
                       </div>
                       <div className="check-out mt-4">
                      <input type="submit" className="btn btn-primary" id="sbt_btn" value="Get a Quote" />
                      </div>
                      </form>
                      </ModalBody>
                      </Modal>
                      </div>
                      <div className="jba-our-exp">
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Exuisite-Craftmanship.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          Exquisite <br /> Craftsmanship
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Bis-logo.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <span>
                          100% Hallmarked <br /> Jewelry
                        </span>
                      </div>
                      <div className="card-img">
                        <div className="v-h">
                          <video autoPlay loop muted playsInline style={{pointerEvents:'none'}}>
                            <source
                              src="/videos/Giftworthy-packaging.mp4"
                              type="video/mp4"
                            />
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
                              <div className="pro-list-1" dangerouslySetInnerHTML={{ __html:product_description}}>
                              
                              </div>
                            </div>
                          </AccordionBody>
                        </AccordionItem>
                       {productreviewData && productreviewData.length>=0 &&(
                        <AccordionItem>
                          <AccordionHeader targetId="3" tag="h3">
                            Reviews
                          </AccordionHeader>
                          <AccordionBody accordionId="3">
                            <div className="user-prd-comm">
                              <div className="rept-col">
                                <span>Vivek Gururani</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Susil Behera</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use! It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Abhinav</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Susil Behera</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Abhinav</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                              <div className="rept-col">
                                <span>Vivek Gururani</span>
                                <p>It is a very beautiful bracelet that works perfectly as a rakhi as well.Great for daily use!</p>
                              </div>
                            </div>
                            <div className="action-comment">
                              <button type="button" className="btn btn-lg btn-warning my-rev" >Add Your Review</button>
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
        {relatedProductData && relatedProductData.length >=0 && (
        <RelatedProduct  productrelatedData={relatedProductData}/> )}
          </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default ProductDetailsnew;
