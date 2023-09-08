import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RelatedProductList from "./RelatedProductList";
SwiperCore.use([Navigation]);

const RelatedProduct = ({productrelatedData}) => {
    


    return (
        <>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    640: {
                      slidesPerView: 2,
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
                    { productrelatedData && productrelatedData.map((item,i) =>(
                     <SwiperSlide key={i}>
                     <RelatedProductList productName={item.product_name} productSlug={item.product_slug} productprice={item.product_price} sku={item.product_sku_id} frontImg={item.product_front_image_url} backImg={item.product_back_image_url}/>
                     </SwiperSlide>
                    ))}
                   
                    
          
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

export default RelatedProduct;
