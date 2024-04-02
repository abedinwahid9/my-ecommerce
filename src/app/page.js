import BannerSection from "@/components/BannerSection/BannerSection";
import Category from "@/components/Category/Category";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import OurProducts from "@/components/OurProducts/OurProducts";
import ShapeDesginOne from "@/components/ShapeDesign/ShapeDesginOne";
import ShortBanner from "@/components/ShortBanner/ShortBanner";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <ShapeDesginOne></ShapeDesginOne>
      <Category></Category>
      <ShortBanner />
      <OurProducts />
      <FeaturedProducts />
    </div>
  );
}
