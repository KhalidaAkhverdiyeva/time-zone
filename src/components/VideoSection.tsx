import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PlayBtn from "./PlayBtn";

const VideoSection = () => {
  return (
    <div className="relative ">
      <img
        style={{ maxWidth: "none" }}
        className="object-cover w-[100%] h-[400px] md:w-[100%] md:h-[100%]"
        src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/sectin_bg1.png.webp"
        alt=""
      />
      <div className="flex gap-[150px] items-center justify-between absolute bottom-0 left-0 bg-[#FE2122] text-[16px] font-[600] text-white px-[10px] py-[6px] md:py-[60px] md:pl-[80px] md:pr-[143px]">
        <span className="uppercase">nEXT VIDEO </span>
        <FaArrowRightLong className="text-[28px] font-[500]" />{" "}
      </div>
      <PlayBtn />
    </div>
  );
};

export default VideoSection;
