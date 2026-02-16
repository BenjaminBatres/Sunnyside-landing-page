import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Image from "next/image";
import HamburgerIcon from "../assets/icon-hamburger.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
  ];
  return (
    <>
      <nav className="flex justify-between items-center h-25 px-8">
        <Image src={Logo} alt="Sunnyside Logo" />
        <ul className="items-center gap-8 hidden md:flex">
          {links.map((link) => (
            <li key={link.name} className="text-white font-Barlow">
              {link.name}
            </li>
          ))}
          <button className="bg-white font-serif px-6 py-2 rounded-full font-bold uppercase hover:bg-[#e0f0ff] transition-colors">
            Contact
          </button>
        </ul>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image src={HamburgerIcon} alt="Menu" className="md:hidden" />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute flex justify-center top-25 left-0 right-0 z-10">
          <div className="bg-White w-[90%]">
            <ul className="flex flex-col items-center gap-8 py-8">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="text-Grey-550 font-semibold text-lg font-Barlow"
                >
                  {link.name}
                </li>
              ))}
              <button className="bg-Yellow-500 font-serif px-6 py-3 rounded-full font-bold uppercase hover:bg-[#e0f0ff] transition-colors">
                Contact
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
