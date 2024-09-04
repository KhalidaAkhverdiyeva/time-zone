"use client";
import React, { FC, useState, useEffect } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const PopularWatchCard: FC<WatchCardProp> = ({
  id,
  img,
  price,
  name,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [isAdded, setIsAdded] = useState<boolean>(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setIsAdded(cartItems.some((item: { id: number }) => item.id === id));
  }, [id]);

  const handleCardClick = () => {
    setIsAdded((prev) => !prev);
    if (isAdded) {
      onRemoveFromCart(id);
    } else {
      onAddToCart({ id, img, price, name });
    }
  };

  return (
    <div className="relative">
      <div
        className="relative overflow-hidden mb-[20px] group cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          className="border-b-solid border-b-[#ff2020] border-b-[3px] w-full"
          src={img}
          alt=""
        />
        <div
          className={`absolute top-[10px] right-[10px] transition-opacity duration-300 ${
            isAdded
              ? "text-red-600 opacity-100"
              : "text-gray-900 opacity-0 group-hover:opacity-100"
          }`}
        >
          {isAdded ? (
            <FaHeart className="w-[40px] h-[40px]" />
          ) : (
            <IoMdHeartEmpty className="w-[40px] h-[40px]" />
          )}
        </div>
        <div
          className={`absolute bottom-[-64px] left-0 w-full h-[64px] text-white text-center flex items-center justify-center transition-all duration-500 ${
            isAdded
              ? "bg-green-600 bottom-0 opacity-100"
              : "bg-[#ff2020] opacity-0 group-hover:opacity-100 group-hover:bottom-0"
          }`}
        >
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </div>
      </div>
      <div>
        <p className="text-[24px] font-[700] text-center text-[#444444]">
          {name}
        </p>
      </div>
      <div>
        <p className="text-[18px] text-center text-[#444444] font-[500]">
          $ {price}
        </p>
      </div>
    </div>
  );
};

export default PopularWatchCard;
