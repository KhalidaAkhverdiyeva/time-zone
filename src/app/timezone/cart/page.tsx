import ProductTable from "@/components/ProductTable";
import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="relative  flex justify-center items-center mb-[50px] md:mb-[200px]">
        <h2 className="absolute text-[26px] md:text-[70px] text-[#0b1c39] font-[700]">
          Cart List
        </h2>
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/hero/about_hero.png.webp"
          alt=""
          className="h-[400px] md:h-[100%]"
        />
      </div>
      <ProductTable />
    </div>
  );
};

export default Cart;
