import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper";



function CustomerReview() {
    return (
        <div className="row col-mag">
            <div className="col-lg-4 col-bg">
                <div className="customer-left">
                    <div className="q-pic">
                        <img src="/img/themepic/icons/quote-icons.png" alt="icons" />
                        <h3>Customer Says</h3>
                        <p>Stories of people admired <br />  by JBA jewelry</p>
                        <di className="ratng-over">
                        <div className="d-flex">
                            <div className="ratings">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                        </div>
                        </di>
                    </div>
                </div>
            </div>

            <div className="col-lg-8">
                <div className="test-slider">
                <Swiper
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                      }}
                     
                      freeMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, FreeMode, Pagination]}
                      className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='test-inner'>
                                <h4>Sonali Mittal</h4>
                                <p>You are amazing and your services are really appreciated. I was surprised with ring, it was beautifully designed. Yes I am your happy customer</p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='test-inner'>
                                <h4>Tanya</h4>
                                <p>I recently bought a customised ring from the company. The product looks amazing. Highly satisfied with timely delivery and great customer service.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='test-inner'>
                                <h4>Samyuktha</h4>
                                <p>I bought my engagement ring from Jewels by Anu, was very satisfied with the customer service and the price was very reasonable. I am very happy to recommend my family and friends since the quality was fabulous. Thanks Anu for such a nice ring.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className='test-inner'>
                                <h4>Mukesh Gupta</h4>
                                <p>Got 3 carat solitaire ring made from Jewels by Anu. My Solitaire is certified and ring is hallmarked. Prices are lower than other jewellers and quality is great. Great shopping experience. Thank you. Thanks</p>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </div>

        </div>
    )
}



export default CustomerReview
