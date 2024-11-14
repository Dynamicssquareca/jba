import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

SwiperCore.use([Navigation]);

const Exhibition = () => {
    


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  breakpoints={{
                    0:{
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1300: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1400: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                  }}
                
                navigation={{
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n",
                }}
                className="custom-class"
            >
                     
                    
                     <SwiperSlide>
                     <div className="product-img-action-wrap">
                     <div className="product-img product-img-zoom">
                     <Image
                     className="default-img"
                     src="/img/exhibition/jbaem1.webp"
                     alt="product"
                     width={500}
                     height={500}
                    />
                    
                    </div>
                    </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-img-action-wrap">
                     <div className="product-img product-img-zoom">
                     <Image
                     className="default-img"
                     src="/img/exhibition/jbaem2.webp"
                     alt="product"
                     width={500}
                     height={500}
                    />
                    </div>
                    </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-img-action-wrap">
                     <div className="product-img product-img-zoom">
                     <Image
                     className="default-img"
                     src="/img/exhibition/jbaem3.webp"
                     alt="product"
                     width={500}
                     height={500}
                    />
                    </div>
                    </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-img-action-wrap">
                     <div className="product-img product-img-zoom">
                     <Image
                     className="default-img"
                     src="/img/exhibition/jbaem4.webp"
                     alt="product"
                     width={500}
                     height={500}
                    />
                    
                    </div>
                    </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-img-action-wrap">
                     <div className="product-img product-img-zoom">
                     <Image
                     className="default-img"
                     src="/img/exhibition/jbaem5.webp"
                     alt="product"
                     width={500}
                     height={500}
                    />
                    </div>
                    </div>
                     </SwiperSlide>
                      
            </Swiper>

            <div
                className="slider-arrow"
            >
                <span className="slider-btn slider-prev slick-arrow custom_prev_n">
                <i className="bi bi-chevron-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_n">
                <i className="bi bi-chevron-right"></i>
                </span>
            </div>
            
        </>
    );
};

export default Exhibition;
