import Image from "next/image";
import animateImgBg from "../../assets/bannerImg/banner1.png";
import animateImg from "../../assets/bannerImg/animatedimg.png";
import "./animatedbanner.css";

const AnimatedBanner = () => {
  return (
    <div className="my-10 p-10 flex justify-center items-center h-[25rem] relative">
      <Image
        className="w-4/5 h-64 opacity-40"
        src={animateImgBg}
        width={0}
        height={0}
        alt="animated img"
      />
      <div className=" absolute -rotate-12 flex justify-center items-center">
        <Image
          className="w-72 h-72 animateImg"
          src={animateImg}
          width={0}
          height={0}
          alt={animateImg}
        />
      </div>
    </div>
  );
};

export default AnimatedBanner;
