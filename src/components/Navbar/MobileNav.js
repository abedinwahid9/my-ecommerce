"use client";
import { HiHome } from "react-icons/hi2";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import Cart from "../Cart/Cart";
import styles from "./mobile.module.css";

const MobileNav = () => {
  return (
    <div
      className="fixed md:hidden block px-5 drop-shadow-xl bg-primaryColor w-full rounded-t-3xl p-4 z-[9999]"
      style={{ bottom: 0 }}
    >
      <ul className="flex justify-between gap-1 items-center">
        <li
          className={`p-4 rounded-3xl  text-2xl ${styles.shadow}`}
          href="#"
          active
        >
          <HiHome />
        </li>
        <li className={`p-4 rounded-3xl  text-2xl ${styles.shadow}`} href="#">
          <SiHomeassistantcommunitystore />
        </li>
        <li className={`p-4 rounded-3xl  text-2xl ${styles.shadow}`} href="#">
          <FaInfoCircle />
        </li>

        <li className={`p-1 rounded-3xl   ${styles.shadow}`} href="#">
          <Cart />
        </li>
        <li className={`p-4 rounded-3xl  text-2xl ${styles.shadow}`} href="#">
          <IoIosContact />
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
