"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "./banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

import Image from "next/image";
import banner1 from "@/assets/cover/picklecover1.jpg";
import banner2 from "@/assets/cover/picklecover21.jpg";
import banner3 from "@/assets/cover/picklecover3.jpg";

export default function BannerSection() {
  return (
    <div>
      <Swiper
        className="mySwiper styles md:h-[650px] h-[300px]"
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={banner3}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={banner2}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="w-full h-full"
            src={banner1}
            width={0}
            height={0}
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
