import BannerSection from "@/components/BannerSection/BannerSection";
import Category from "@/components/Category/Category";
import OurProducts from "@/components/OurProducts/OurProducts";
import ShapeDesginOne from "@/components/ShapeDesign/ShapeDesginOne";

export default function Home() {
  return (
    <div>
      <BannerSection></BannerSection>
      <ShapeDesginOne></ShapeDesginOne>
      <Category></Category>
      <OurProducts />
    </div>
  );
}
