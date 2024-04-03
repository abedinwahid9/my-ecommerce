import React from "react";
import Title from "../Title/Title";
import Image from "next/image";
import image1 from "@/assets/whyyoushouldchooseus/img1.png";
import image2 from "@/assets/whyyoushouldchooseus/img2.png";
import image3 from "@/assets/whyyoushouldchooseus/img3.png";
import image4 from "@/assets/whyyoushouldchooseus/img4.png";
import bg from "@/assets/whyyoushouldchooseus/bg.png";
import { FaDivide } from "react-icons/fa";

const WhyYouShouldChooseUs = () => {
  return (
    <div className="mx-auto container ">
      <Title title="why choose us!" />

      <div className="flex md:flex-row flex-col justify-around my-10 items-center dark:text-white">
        <div className="flex w-full  md:w-1/3  flex-col gap-10 items-center ">
          <div className="flex flex-col items-center md:items-start px-5">
            <Image
              className="w-40 h-40"
              src={image1}
              width={0}
              height={0}
              alt={image1}
            />
            <p>
              Homemade pickles aren't just about preserving vegetables; they're
              about preserving memories, flavors, and traditions. Every jar
              tells a story of patience, creativity, and love poured into each
              and every slice.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start px-5">
            <Image
              className="w-40 h-40"
              src={image2}
              width={0}
              height={0}
              alt={image1}
            />
            <h2>
              Homemade pickles aren't just about preserving vegetables; they're
              about preserving memories, flavors, and traditions. Every jar
              tells a story of patience, creativity, and love poured into each
              and every slice.
            </h2>
          </div>
        </div>
        <div className="flex  w-full  md:w-1/3 justify-center ">
          <Image
            className="w-full h-full"
            src={bg}
            width={0}
            height={0}
            alt={image1}
          />
        </div>
        <div className="flex  w-full  md:w-1/3 flex-col gap-10 items-center ">
          <div className="flex flex-col items-center md:items-end px-5 text-start md:text-end">
            <Image
              className="w-40 h-40"
              src={image3}
              width={0}
              height={0}
              alt={image1}
            />
            <h2>
              Homemade pickles aren't just about preserving vegetables; they're
              about preserving memories, flavors, and traditions. Every jar
              tells a story of patience, creativity, and love poured into each
              and every slice.
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end px-5 text-start md:text-end">
            <Image
              className="w-40 h-40"
              src={image4}
              width={0}
              height={0}
              alt={image1}
            />
            <h2>
              Homemade pickles aren't just about preserving vegetables; they're
              about preserving memories, flavors, and traditions. Every jar
              tells a story of patience, creativity, and love poured into each
              and every slice.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYouShouldChooseUs;
