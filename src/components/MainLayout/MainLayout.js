"use client";
import NavbarCom from "../Navbar/NavbarCom";
import MobileNav from "../Navbar/MobileNav";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavbarCom></NavbarCom>
      <MobileNav></MobileNav>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
