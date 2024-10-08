import { log } from "console";
import React, { FC } from "react";
interface CardImg {
  url: string;
}

const ChoiceCard: FC<CardImg> = ({ url }) => {
  // console.log(order)
  return (
    <div className="flex gap-[50px] md:gap-[150px] items-center mb-[30px] flex-wrap md:flex-nowrap ">
      <div className="md:w-[50%] w-[100%] ">
        <h3 className="text-[29px] md:text-[56px] font-[700] mb-[40px] ">
          Watch of Choice
        </h3>
        <p className="mb-[40px] text-[#777] leading-[30px] text-[18px]">
          Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse.
        </p>
        <button className="relative py-[15px] px-[25px] text-white bg-[#FF2020] font-[600] overflow-hidden group">
          <span className="relative z-10 uppercase">SHow watches</span>
          <span className="absolute inset-0 bg-[#4A4A4B]  transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
        </button>
      </div>
      <div className="md:w-[50%] w-[100%]">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default ChoiceCard;
