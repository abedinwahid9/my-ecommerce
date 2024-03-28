"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import Image from "next/image";
import bannerImg from "../../assets/banner.jpeg";

export default function BannerSection() {
  return (
    <div className="drop-shadow-2xl">
      <Swiper
        className="mySwiper styles md:h-[500px] h-[250px]"
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={bannerImg}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={bannerImg}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={bannerImg}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
