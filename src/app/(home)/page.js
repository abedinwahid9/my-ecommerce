import AnimatedBanner from "@/components/AnimatedBanner/AnimatedBanner";
import BannerSection from "@/components/BannerSection/BannerSection";
import Category from "@/components/Category/Category";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import OurProducts from "@/components/OurProducts/OurProducts";
import ShapeDesginOne from "@/components/ShapeDesign/ShapeDesginOne";
import ShortBanner from "@/components/ShortBanner/ShortBanner";
import WhyYouShouldChooseUs from "@/components/WhyYouShouldChooseUs/WhyYouShouldChooseUs";
import shortbanner from "@/assets/bannerImg/shortbanner.png";
import lastbanner from "@/assets/last/banner.jpg";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <ShapeDesginOne></ShapeDesginOne>
      <Category></Category>
      <ShortBanner img={shortbanner} height="h-52" margin="my-10" />
      <OurProducts />
      <AnimatedBanner />
      <FeaturedProducts />
      <WhyYouShouldChooseUs />
      <div className="relative">
        <ShortBanner img={lastbanner} height="h-[500px]" margin="mt-16" />
        <svg
          className="absolute bottom-0"
          id="wave"
          style={{ transform: "rotate(0deg)", transition: " 0.3s" }}
          viewBox="0 0 1440 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(96, 188, 116, 1)" offset="0%"></stop>
              <stop stopColor="rgba(96, 188, 116, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,30L10.9,33.3C21.8,37,44,43,65,51.7C87.3,60,109,70,131,66.7C152.7,63,175,47,196,38.3C218.2,30,240,30,262,35C283.6,40,305,50,327,48.3C349.1,47,371,33,393,26.7C414.5,20,436,20,458,21.7C480,23,502,27,524,28.3C545.5,30,567,30,589,26.7C610.9,23,633,17,655,18.3C676.4,20,698,30,720,30C741.8,30,764,20,785,28.3C807.3,37,829,63,851,71.7C872.7,80,895,70,916,70C938.2,70,960,80,982,73.3C1003.6,67,1025,43,1047,40C1069.1,37,1091,53,1113,51.7C1134.5,50,1156,30,1178,28.3C1200,27,1222,43,1244,45C1265.5,47,1287,33,1309,26.7C1330.9,20,1353,20,1375,31.7C1396.4,43,1418,67,1440,65C1461.8,63,1484,37,1505,23.3C1527.3,10,1549,10,1560,10L1570.9,10L1570.9,100L1560,100C1549.1,100,1527,100,1505,100C1483.6,100,1462,100,1440,100C1418.2,100,1396,100,1375,100C1352.7,100,1331,100,1309,100C1287.3,100,1265,100,1244,100C1221.8,100,1200,100,1178,100C1156.4,100,1135,100,1113,100C1090.9,100,1069,100,1047,100C1025.5,100,1004,100,982,100C960,100,938,100,916,100C894.5,100,873,100,851,100C829.1,100,807,100,785,100C763.6,100,742,100,720,100C698.2,100,676,100,655,100C632.7,100,611,100,589,100C567.3,100,545,100,524,100C501.8,100,480,100,458,100C436.4,100,415,100,393,100C370.9,100,349,100,327,100C305.5,100,284,100,262,100C240,100,218,100,196,100C174.5,100,153,100,131,100C109.1,100,87,100,65,100C43.6,100,22,100,11,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
