import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import DarkModeButton from "./DarkModeButton";
import Navlinks from "./Navlinks";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">The News Letter</h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          {/* using Button as a component because hame baqi chizen server side rkhni hn but button client side h q k hooks use honge usme */}
          <DarkModeButton />
          <button className="hidden md:inline dark:bg-slate-800 bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Navlinks */}
      <Navlinks />

      {/* Search box */}
      <SearchBox />
    </header>
  );
}

export default Header;
