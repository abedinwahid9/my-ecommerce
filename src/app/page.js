import BannerSection from "@/components/BannerSection/BannerSection";
import DarkMode from "@/components/DarkMode/DarkMode";
import MobileNav from "@/components/Navbar/MobileNav";
import NavbarCom from "@/components/Navbar/NavbarCom";

export default function Home() {
  return (
    <div>
      <NavbarCom></NavbarCom>
      <MobileNav></MobileNav>
      <div className="h-[400px]">
        <BannerSection></BannerSection>
      </div>
      <DarkMode></DarkMode>
    </div>
  );
}
