import BannerSection from "@/components/BannerSection/BannerSection";
import MobileNav from "@/components/Navbar/MobileNav";
import NavbarCom from "@/components/Navbar/NavbarCom";
import Title from "@/components/Title/Title";

export default function Home() {
  return (
    <div>
      <NavbarCom></NavbarCom>
      <MobileNav></MobileNav>
      <div className="h-[400px]">
        <BannerSection></BannerSection>
      </div>
      <Title></Title>
    </div>
  );
}
