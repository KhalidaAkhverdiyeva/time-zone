import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="relative  flex justify-center items-center mb-[50px] md:mb-[200px]">
      <h2 className="absolute text-[26px]  md:text-[70px] text-[#0b1c39] font-[700]">
        About Us
      </h2>
      <Image
        src="https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png.webp"
        alt=""
        className="md:w-[100%] h-[400px] md:h-[100%]"
        width={500}
        height={500}
      />
    </div>
  );
};

export default AboutHero;
