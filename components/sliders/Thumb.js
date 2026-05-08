import { useState, useRef } from "react";
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

const ThumbSlider = ({
  imageOne,
  imageTwo,
  video,
  productName,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef([]);
 
  const mediaItems = [
    imageOne && {
      type: "image",
      src: imageOne,
    },

    imageTwo && {
      type: "image",
      src: imageTwo,
    },

    video && {
      type: "video",
      src: video,
    },
  ].filter(Boolean);
 
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
 
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
 
    const activeVideo =
      videoRefs.current[swiper.activeIndex];

    if (activeVideo) {
      activeVideo.play();
    }
  };

  return (
    <div className="product-gallery">
 
      <Swiper
        navigation={true}
        spaceBetween={15}
        onSlideChange={handleSlideChange}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className="main-slider"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="main-image-box">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={productName}
                  width={700}
                  height={700}
                  className="main-image"
                  priority
                />
              ) : (
                <video
                  ref={(el) =>
                    (videoRefs.current[index] = el)
                  }
                  className="product-video"
                  controls
                  muted
                  playsInline
                  autoPlay={activeIndex === index}
                >
                  <source
                    src={item.src}
                    type="video/mp4"
                  />
                </video>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumb-slider"
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="thumb-image-box">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`thumb-${index}`}
                />
              ) : (
                <div className="video-thumb">
                  <video muted>
                    <source
                      src={item.src}
                      type="video/mp4"
                    />
                  </video>
  
                  <div className="play-icon">
                    ▶
                  </div>
                </div>
              )}
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

        .product-video {
          width: 100%;
          max-height: 600px;
          object-fit: contain;
          border-radius: 12px;
          background: #000;
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
          position: relative;
        }

        .thumb-image-box img,
        .video-thumb video {
          width: 100%;
          height: 90px;
          object-fit: contain;
          display: block;
          border-radius: 6px;
        }
 
        .video-thumb {
          position: relative;
        }

        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.65);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          pointer-events: none;
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

          .thumb-image-box img,
          .video-thumb video {
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