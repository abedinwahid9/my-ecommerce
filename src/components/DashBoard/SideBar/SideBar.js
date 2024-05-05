"use client";
import Link from "next/link";
import style from "./sidebar.module.css";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const currentPath = usePathname();

  const navLink = [
    {
      name: "admin",
      link: "/admin",
    },
    {
      name: "add product",
      link: "/admin/add-product",
    },
    {
      name: "add category",
      link: "/admin/add-category",
    },
    {
      name: "all product",
      link: "/admin/all-products",
    },
    {
      name: "sales product",
      link: "/admin/sales-products",
    },
    {
      name: "users",
      link: "/admin/users",
    },
    {
      name: "home",
      link: "/",
    },
  ];

  return (
    <div
      style={{ height: "100vh" }}
      className="bg-primaryColor w-48 drop-shadow-2xl "
    >
      <ul className="flex flex-col uppercase font-medium  py-3 px-2  text-black">
        {navLink.map((link, i) => {
          return (
            <li className={`${style.shadow} py-1`} key={i}>
              <Link
                className={currentPath === link.link ? "active" : ""}
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
