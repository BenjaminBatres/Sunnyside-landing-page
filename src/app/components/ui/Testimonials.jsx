import Image from "next/image";
import React from "react";

export default function Testimonials({ testimonial }) {
  return (
    <div className="flex flex-col items-center w-full sm:w-[48%] lg:w-full">
      <Image
        src={testimonial.pfp}
        width={100}
        height={100}
        alt=""
        className="h-20 w-20 rounded-full mb-8 sm:mb-12"
      ></Image>
      <p className="text-center font-Barlow text-Grey-950 text-sm sm:text-base font-semibold max-w-[330px] mb-8 sm:mb-12">
        {testimonial.testimonial}
      </p>
      <h3 className="text-2xl text-Grey-950 font-Fraunces font-black mb-2">
        {testimonial.name}
      </h3>
      <p className="text-Grey-400 text-sm">{testimonial.role}</p>
    </div>
  );
}
