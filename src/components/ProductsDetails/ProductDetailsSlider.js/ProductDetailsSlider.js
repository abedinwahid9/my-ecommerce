"use client";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import pickle from "@/assets/categories/single.jpg";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductDetailsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-28"
      >
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            width={0}
            height={0}
            src={pickle}
            alt="productslider"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailsSlider;
