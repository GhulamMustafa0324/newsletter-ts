"use client"; //server side component can't use hooks so we use this to make only this page a client side

import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

function Navlinks() {
  const pathname = usePathname(); //returns the URL i.e mysite.com/news/sports

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path; // jo category h wahi path h, working ese h k "/" is se split krega values phr pop hongi values to jb se pehle pop hoga agr woh path k equal h to true
  };

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b">
      {categories.map((category) => (
        <NavLink
          key={category}
          category={category}
          isActive={isActive(category)}
        />
      ))}
    </nav>
  );
}

export default Navlinks;
