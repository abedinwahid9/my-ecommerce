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
      <ShortBanner img={lastbanner} height="h-[500px]" margin="mt-16" />
    </div>
  );
}
