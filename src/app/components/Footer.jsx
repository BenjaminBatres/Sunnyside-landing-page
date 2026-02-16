import React from "react";
import Image from "next/image";
import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";

export default function Footer() {
  const links = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Projects", href: "#" },
  ];

  const socialMediaIcons = [
    { name: "Facebook", src: Facebook },
    { name: "Instagram", src: Instagram },
    { name: "Twitter", src: Twitter },
    { name: "Pinterest", src: Pinterest },
  ];
  return (
    <footer className="py-20 flex flex-col items-center bg-[#90d4c5]">
      <h2 className="mb-10 text-Green-500 text-4xl font-black font-Barlow">
        sunnyside
      </h2>
      <div className="flex gap-15 mb-20">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-Green-500 font-semibold hover:text-Green-300 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-6">
        {socialMediaIcons.map((icon, index) => (
          <a
            key={index}
            href="#"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <Image src={icon.src} width={20} height={20} alt={icon.name} />
          </a>
        ))}
      </div>
    </footer>
  );
}
