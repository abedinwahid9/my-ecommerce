import BannerSection from "@/components/BannerSection/BannerSection";
import Category from "@/components/Category/Category";
import ShapeDesginOne from "@/components/ShapeDesign/ShapeDesginOne";

export default function Home() {
  return (
    <div>
      <div className="h-[400px]">
        <BannerSection></BannerSection>
      </div>
      <ShapeDesginOne></ShapeDesginOne>
      <Category></Category>
    </div>
  );
}
