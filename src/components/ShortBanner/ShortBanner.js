import Image from "next/image";
import shortbanner from "../../assets/bannerImg/banner3.jpg";

const ShortBanner = () => {
  return (
    <div className="my-10 ">
      {" "}
      <Image
        className="w-full h-52 object-cover"
        src={shortbanner}
        alt="Next.js"
        width={0}
        height={0}
      />
    </div>
  );
};

export default ShortBanner;
