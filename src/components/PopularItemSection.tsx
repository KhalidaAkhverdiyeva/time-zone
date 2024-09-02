"use client";

import React from "react";
import PopularHeadline from "./PopularHeadline";
import PopularWatchCard from "./PopularWatchCard";

const PopularItemSection = () => {
  const addToCart = (item: { id: number; img: string; price: number }) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = [...cartItems, { ...item, quantity: 1 }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: number) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const updatedCart = cartItems.filter(
      (item: { id: number }) => item.id !== id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  return (
    <div className="w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center mb-[200px]">
      <PopularHeadline />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-[100%]">
        <PopularWatchCard
          id={1}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png"
          price={250}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="Submariner"
        />
        <PopularWatchCard
          id={2}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png"
          price={325}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="Daytona"
        />
        <PopularWatchCard
          id={3}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png"
          price={544}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="Explorer "
        />
        <PopularWatchCard
          id={4}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png"
          price={170}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="GMT-Master II"
        />
        <PopularWatchCard
          id={5}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png"
          price={1000}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="Yacht-Master"
        />
        <PopularWatchCard
          id={6}
          img="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png"
          price={167}
          onAddToCart={addToCart}
          onRemoveFromCart={removeFromCart}
          name="Milgauss"
        />
      </div>
      <button className="relative py-[20px] px-[25px] text-white bg-[#FF2020]  font-[600] overflow-hidden group mt-[100px]">
        <span className="relative z-10 uppercase">View More Products</span>
        <span className="absolute inset-0 bg-[#4A4A4B] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
      </button>
    </div>
  );
};

export default PopularItemSection;
