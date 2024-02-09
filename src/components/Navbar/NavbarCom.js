"use client";
import Link from "next/link";
import { Navbar, NavbarBrand } from "flowbite-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Cart from "../Cart/Cart";

const NavbarCom = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const navlinkList = [
    { name: "Home", link: "/" },
    {
      name: "All Category",
      link: "/all-category",
    },
    {
      name: "Contant",
      link: "/contact",
    },
  ];

  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          width={100}
          height={100}
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>

      <div
        style={{ gap: "10px" }}
        className="flex-1 flex justify-end items-center bg-primaryColor"
      >
        <div className="hidden w-full md:block md:w-auto ">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
        <Cart></Cart>
      </div>
    </Navbar>
  );
};

export default NavbarCom;
