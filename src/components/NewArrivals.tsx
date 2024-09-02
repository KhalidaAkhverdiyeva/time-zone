import React from "react";
import ArrivalsCard from "./ArrivalsCard";

const NewArrivals = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto py-[50px] px-[15px] md:px-[0px] md:py-[200px]">
      <h2 className="text-[48px] font-[700] mb-[70px]">New Arrivals</h2>
      <div className="flex gap-[30px] flex-wrap md:flex-nowrap ">
        <ArrivalsCard img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product1.png" />
        <ArrivalsCard img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product2.png.webp" />
        <ArrivalsCard img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/new_product3.png.webp" />
      </div>
    </div>
  );
};

export default NewArrivals;
