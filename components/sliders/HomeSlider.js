import { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleProduct from "../ecommerce/SingleProduct";

SwiperCore.use([Navigation]);

const HomeSlider = () => {


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
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
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SingleProduct />
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

export default HomeSlider;
