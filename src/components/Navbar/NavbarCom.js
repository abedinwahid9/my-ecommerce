"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Cart from "../Cart/Cart";

const NavbarCom = () => {
  const currentPath = usePathname();

  const navlinkList = [
    { name: "Home", link: "/" },
    {
      name: "All Category",
      link: "/all-category",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div
      className="p-0  gap-10  mx-auto flex justify-center items-center drop-shadow-xl"
      fluid
      rounded
    >
      {/* logo or company name */}
      <div className="flex w-24 justify-center">
        {/* <Image
          width={100}
          height={100}
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt=" React Logo"
        /> */}
        <span className="self-center uppercase font-lobsterTwo whitespace-nowrap text-xl font-semibold dark:text-white">
          pickle
        </span>
      </div>

      <div className="hidden py-3 px-6 flex-1 md:flex justify-end items-center rounded-bl-full gap-5 bg-primaryColor ">
        <div className="flex justify-end w-full  ">
          <ul className="flex gap-5  font-medium ">
            {navlinkList.map((navLink, i) => {
              return (
                <Link
                  key={i}
                  href={navLink.link}
                  className={currentPath === navLink.link ? "active" : ""}
                >
                  {navLink.name}
                </Link>
              );
            })}
          </ul>
        </div>
        <Link href="/mycart">
          <Cart></Cart>
        </Link>
      </div>
    </div>
  );
};

export default NavbarCom;
