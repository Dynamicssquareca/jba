import { useState } from "react";
import Image from "next/image";

import SwiperCore, {
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

SwiperCore.use([Navigation, Thumbs, FreeMode]);

const ThumbSlider = ({ imageOne, imageTwo, productName }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [imageOne, imageTwo].filter(Boolean);

  return (
    <div className="product-gallery">
      {/* Main Slider */}
      <Swiper
        navigation={true}
        spaceBetween={15}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className="main-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="main-image-box">
              <Image
                src={img}
                alt={productName}
                width={700}
                height={700}
                className="main-image"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */} 
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="thumb-image-box">
              <img src={img} alt={`thumb-${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .product-gallery {
          width: 100%;
        }

        .main-slider {
          width: 100%;
          margin-bottom: 18px;
          border-radius: 14px;
          overflow: hidden;
        }

        .main-image-box {
          background: #fff;
          border-radius: 14px;
          overflow: hidden;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .thumb-slider {
          width: 100%;
        }

        .thumb-image-box {
          border: 2px solid transparent;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          transition: all 0.3s ease;
          padding: 6px;
        }

        .thumb-image-box img {
          width: 100%;
          height: 90px;
          object-fit: contain;
          display: block;
        }

        :global(.thumb-slider .swiper-slide-thumb-active .thumb-image-box) {
          border-color: #d66c6c;
          box-shadow: 0 4px 12px rgba(214, 108, 108, 0.2);
        }

        .thumb-image-box:hover {
          border-color: #d66c6c;
        }

        :global(.main-slider .swiper-button-next),
        :global(.main-slider .swiper-button-prev) {
          width: 42px;
          height: 42px;
          background: #fff;
          border-radius: 50%;
          border: 1px solid #f0d4d4;
          color: #d66c6c;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        :global(.main-slider .swiper-button-next:after),
        :global(.main-slider .swiper-button-prev:after) {
          font-size: 16px;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .main-image-box {
            height: 400px;
            padding: 12px;
          }

          .thumb-image-box img {
            height: 65px;
          }

          :global(.main-slider .swiper-button-next),
          :global(.main-slider .swiper-button-prev) {
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </div>
  );
};

export default ThumbSlider;