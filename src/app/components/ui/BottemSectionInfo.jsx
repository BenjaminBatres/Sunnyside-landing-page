import React from "react";

export default function BottemSectionInfo({
  backgroundImage,
  title,
  description,
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-200 sm:h-250 tablet:h-170 relative "
    >
      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2
          className={`text-4xl font-Fraunces font-black ${title === "Graphic Design" ? "text-Green-800" : "text-Blue-800"} mb-4`}
        >
          {title}
        </h2>
        <p
          className={`${title === "Graphic Design" ? "text-Green-800" : "text-Blue-800"} mt-4 sm:w-[60%] xl:w-[40%] font-semibold`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
