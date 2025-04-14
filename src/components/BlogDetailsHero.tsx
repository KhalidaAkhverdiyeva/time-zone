import Image from "next/image";
import React from "react";

const BlogDetailsHero = () => {
  return (
    <div className="relative  flex justify-center items-center mb-[100px]">
      <h2 className="absolute text-[26px] md:text-[70px] text-[#0b1c39] font-[700]">
        Blog Details
      </h2>
      <Image
        src="https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png.webp"
        alt=""
        className="md:h-[100%] h-[400px]"
        width={500}
        height={400}
      />
    </div>
  );
};

export default BlogDetailsHero;
