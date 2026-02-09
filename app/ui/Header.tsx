"use client"
import Link from "next/link";
import { useState } from "react";
const Header : React.FC =()=> {

  const [open, setOpen] = useState(false);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="index.html" className="text-xl font-bold">
            {/* Logo */}
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>

          {/* Menu */}
          <ul
            className={`
              lg:flex lg:items-center lg:gap-6
              absolute lg:static top-full left-0 w-full lg:w-auto
              bg-white lg:bg-transparent
              transition-all duration-300
              ${open ? "block" : "hidden"}
            `}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Packges", "#packges"],
              ["Services", "#services"],
              ["Gallery", "#gallery"],
              ["Blog", "#blog"],
              ["Contact", "#contact"],
            ].map(([title, link]) => (
              <li key={title} className="border-b lg:border-none">
                <Link
                  href={link}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default Header
