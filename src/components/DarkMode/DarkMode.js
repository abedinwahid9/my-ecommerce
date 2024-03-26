"use client";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const DarkMode = () => {
  const [themeName, setThemeName] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    console.log(theme);
    if (theme === "dark") setThemeName(true);
  }, []);
  useEffect(() => {
    if (themeName) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeName]);
  return (
    <div
      style={{ boxShadow: "0px 1px 3px gray inset" }}
      className="dark:bg-white flex fixed flex-col top-1/2 z-[999] gap-1 px-1 py-1 rounded-2xl "
    >
      <button
        className="text-dark bg-white dark:bg-black dark:text-white p-1 rounded-full duration-1000"
        onClick={() => {
          setThemeName(true);
        }}
      >
        <IoMoonOutline />
      </button>
      <button
        className="text-white bg-black dark:text-black dark:bg-white p-1 rounded-full duration-1000"
        onClick={() => {
          setThemeName(false);
        }}
      >
        <IoSunnyOutline />
      </button>
    </div>
  );
};

export default DarkMode;
