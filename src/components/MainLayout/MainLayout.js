"use client";
import NavbarCom from "../Navbar/NavbarCom";
import DarkMode from "../DarkMode/DarkMode";
import MobileNav from "../Navbar/MobileNav";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavbarCom></NavbarCom>
      <MobileNav></MobileNav>
      {children}
      <DarkMode></DarkMode>
      <Footer />
    </div>
  );
};

export default MainLayout;
