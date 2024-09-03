import GetInTouch from "@/components/GetInTouch";
import GoogleMapComponent from "../../../components/GoogleMap";
import React from "react";

const CardPage = () => {
  return (
    <div className="mb-[50px] md:mb-[200px]">
      <div className="relative  flex justify-center items-center mb-[100px]">
        <h2 className="absolute text-[26px]  md:text-[70px] text-[#0b1c39] font-[700]">
          Contact
        </h2>
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png.webp"
          alt=""
          className="h-[400px] md:h-[100%]"
        />
      </div>
      <div className="w-full max-w-[1170px] mx-auto px-[15px] md:px-[0px] mb-[100px]">
        <GoogleMapComponent />
      </div>

      <GetInTouch />
    </div>
  );
};

export default CardPage;
