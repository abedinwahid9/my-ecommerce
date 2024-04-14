import Link from "next/link";
import style from "./sidebar.module.css";

const SideBar = () => {
  const navLink = [
    {
      name: "admin",
      link: "/admin",
    },
    {
      name: "add product",
      link: "/add-product",
    },
    {
      name: "all product",
      link: "/all-product",
    },
    {
      name: "home",
      link: "/",
    },
  ];

  return (
    <div
      style={{ height: "100vh" }}
      className="bg-primaryColor w-40 drop-shadow-2xl"
    >
      <ul className="flex flex-col uppercase font-semibold py-3 gap-2 text-black">
        {navLink.map((link, i) => {
          return (
            <li className={`${style.shadow} p-2`} key={i}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
