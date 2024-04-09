"use client";
import Title from "../Title/Title";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const FeaturedProducts = () => {
  const [prevBtnhide, setPrevBtnhide] = useState(false);
  const [nextBtnhide, setNextBtnhide] = useState(false);

  const swiper = useRef(null);
  const handlePrev = () => {
    swiper.current.swiper.slidePrev();
    if (swiper.current.swiper.activeIndex === 0) {
      setPrevBtnhide(true);
    }
    if (window.innerWidth < 768) {
      console.log(swiper.current.swiper);
      if (
        swiper.current.swiper.activeIndex ===
        swiper.current.swiper.slides.length - 2
      ) {
        setNextBtnhide(false);
      }
    } else {
      if (
        swiper.current.swiper.activeIndex ===
        swiper.current.swiper.slides.length - 5
      ) {
        setNextBtnhide(false);
      }
    }
  };
  const handleNext = () => {
    swiper.current.swiper.slideNext();

    if (swiper.current.swiper.activeIndex > 0) {
      setPrevBtnhide(false);
    }
    if (window.innerWidth < 768) {
      if (
        swiper.current.swiper.activeIndex ===
        swiper.current.swiper.slides.length - 1
      ) {
        setNextBtnhide(true);
      }
    } else {
      if (
        swiper.current.swiper.activeIndex ===
        swiper.current.swiper.slides.length - 4
      ) {
        setNextBtnhide(true);
      }
    }
  };

  useEffect(() => {
    if (swiper.current.swiper.activeIndex === 0) {
      setPrevBtnhide(true);
    } else {
      setPrevBtnhide(false);
    }
  }, []);

  return (
    <div className="mx-auto container my-10 lg:px-0 px-5 relative">
      <Title title="Featured products" />

      <div className="my-5">
        <Swiper
          ref={swiper}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            460: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper "
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex gap-2 absolute top-1 lg:-left-5  left-1 h-full items-center z-50">
        <button
          className={`${
            prevBtnhide ? "opacity-0" : "opacity-100"
          }  md:w-10 w-8 md:h-10 h-8 flex justify-center items-center text-2xl text-secondaryColor rounded-full bg-optionalColor`}
          onClick={() => handlePrev()}
        >
          <GrFormPreviousLink />
        </button>
      </div>
      <div className="flex gap-2 absolute top-1 lg:-right-5  right-1 h-full items-center z-50">
        <button
          className={`${
            nextBtnhide ? "opacity-0" : "opacity-100"
          }  md:w-10 w-8 md:h-10 h-8 flex justify-center items-center text-2xl text-secondaryColor rounded-full bg-optionalColor`}
          onClick={() => handleNext()}
        >
          <GrFormNextLink />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
