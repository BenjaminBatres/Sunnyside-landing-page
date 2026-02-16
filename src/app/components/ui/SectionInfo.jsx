"use client";
import React, { useState } from "react";

export default function SectionInfo({ title, titleEnd, description, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col items-center tablet:block px-5 sm:px-10 py-20 xl:px-20 2md:px-40 tablet:py-50 space-y-8">
      <h2 className="text-center tablet:text-start text-4xl max-w-80 sm:max-w-lg sm:text-5xl font-Fraunces font-black text-Grey-950">
        {title}
        <br />
        {titleEnd}
      </h2>
      <p className="text-Grey-550 text-lg font-semibold max-w-lg tablet:max-w-120 text-center tablet:text-start">
        {description}
      </p>
      <button
        className="text-Grey-950 text-lg font-Fraunces font-black uppercase relative px-2 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span>LEARN MORE</span>
        <div
          className="transition-all duration-300 w-full h-3 rounded-full absolute bottom-0 -z-10 left-0"
          style={{
            backgroundColor: bgColor,
            opacity: isHovered ? 1 : 0.4,
          }}
        ></div>
      </button>
    </div>
  );
}
