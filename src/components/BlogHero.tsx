import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <div className="relative  flex justify-center items-center mb-[100px]">
      <h2 className="absolute text-[26px]  md:text-[70px] text-[#0b1c39] font-[700]">
        Blog
      </h2>
      <img
        src="https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png.webp"
        alt=""
        className="md:h-[100%] h-[400px]"
      />
    </div>
  );
};

export default BlogHero;
