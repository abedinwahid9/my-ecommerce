"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

// Import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper/core";

// Initialize Swiper core
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const ProductDetailsSlider = ({ findItem, isLoading }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="md:w-1/2 w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {findItem?.imgData.map((img, i) => (
          <SwiperSlide
            key={i}
            style={{ height: "360px" }}
            className="relative w-full"
          >
            <Image
              src={img}
              alt="category"
              fill
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper h-28"
      >
        <SwiperSlide>
          {findItem?.imgData.map((img, i) => (
            <SwiperSlide key={i} className="relative w-full">
              <Image
                src={img}
                alt="category"
                fill
                style={{ objectFit: "cover" }}
              />
            </SwiperSlide>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailsSlider;
