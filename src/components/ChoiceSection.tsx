import React from "react";
import ChoiceCard from "./ChoiceCard";

const ChoiceSection = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto py-[50px] md:py-[200px] px-[15px] md:px-[0px]">
      <ChoiceCard url="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp" />
      <ChoiceCard url="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png.webp" />
    </div>
  );
};

export default ChoiceSection;
