"use client";
import NavbarCom from "../Navbar/NavbarCom";
import DarkMode from "../DarkMode/DarkMode";
import MobileNav from "../Navbar/MobileNav";

const MainLayout = ({ children }) => {
  return (
    <div>
      <NavbarCom></NavbarCom>
      <MobileNav></MobileNav>
      {children}
      <DarkMode></DarkMode>
    </div>
  );
};

export default MainLayout;
