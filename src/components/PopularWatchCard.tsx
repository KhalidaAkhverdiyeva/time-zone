import React, { FC } from "react";

interface WatchCardProp {
  img: string;
}

const PopularWatchCard: FC<WatchCardProp> = ({ img }) => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden mb-[20px] group cursor-pointer">
        <img
          className="border-b-solid border-b-[#ff2020] border-b-[3px] w-full"
          src={img}
          alt=""
        />
        <div className="absolute bottom-[-64px] left-0 w-full h-[64px] bg-[#ff2020] text-white text-center flex items-center justify-center opacity-0 transition-all duration-500 group-hover:bottom-0 group-hover:opacity-100">
          Add to Cart
        </div>
      </div>
      <div>
        <p className="text-[24px] font-[700] text-center text-[#444444]">
          Thermo Ball Etip Gloves
        </p>
      </div>
      <div>
        <p className="text-[18px] text-center text-[#444444] font-[500]">
          $ 45,743
        </p>
      </div>
    </div>
  );
};

export default PopularWatchCard;
