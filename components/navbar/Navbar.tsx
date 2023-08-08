"use client";

import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div className="h-[100px] flex flex-row justify-between items-center">
      <Link href={"/"} className="text-2xl font-bold">
        lamamia
      </Link>
      <div className="flex flex-row items-center gap-5">
        <DarkModeToggle></DarkModeToggle>
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          );
        })}
        <button className="bg-emerald-500 text-white px-2 py-1 rounded hover:bg-emerald-800">
          Logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
