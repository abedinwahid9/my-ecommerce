/* eslint-disable react/no-unescaped-entities */
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

      <div className="flex lg:flex-row flex-col justify-around my-10 items-center dark:text-white">
        <div className="flex w-full  lg:w-1/3  flex-col gap-10 items-center ">
          <div className="flex flex-col h-[280px] items-center lg:items-start px-5">
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
          <div className="flex flex-col h-[280px] items-center lg:items-start px-5">
            <Image
              className="w-40 h-40"
              src={image2}
              width={0}
              height={0}
              alt={image1}
            />
            <p>
              Our commitment to 100% natural ingredients means you can trust
              what you're eating. No synthetic additives, no hidden chemicals –
              just the goodness of nature, served on your plate.
            </p>
          </div>
        </div>
        <div className="flex  w-full  lg:w-1/3 justify-center ">
          <Image
            className="w-full h-full"
            src={bg}
            width={0}
            height={0}
            alt={image1}
          />
        </div>
        <div className="flex  w-full   md:w-1/3 flex-col gap-10 ">
          <div className="flex flex-col h-[280px] items-center lg:items-end px-5 text-start md:text-end">
            <Image
              className="w-40 h-40"
              src={image3}
              width={0}
              height={0}
              alt={image1}
            />
            <p>
              no preservatives, no artificial colors, and certainly no
              artificial flavors. Just wholesome, natural goodness in every jar.
            </p>
          </div>
          <div className="flex flex-col h-[280px] items-center lg:items-end px-5 text-start md:text-end">
            <Image
              className="w-40 h-40"
              src={image4}
              width={0}
              height={0}
              alt={image1}
            />
            <p>
              When you bite into one of our pickles, you're experiencing more
              than just a burst of flavor – you're tasting the crispness of
              just-picked vegetables, the tang of recently harvested herbs, and
              the vitality of ingredients at their peak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyYouShouldChooseUs;
