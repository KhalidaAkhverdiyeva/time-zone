"use client";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import SearchModal from "./SearchModal";
import Link from "next/link";

const itemsLatest = [
  { href: "/timezone/shop", text: "Product List" },
  { href: "/timezone/product_details", text: "Product Details" },
];
const itemsBlog = [
  { href: "/timezone/blog", text: "Blog" },
  { href: "/timezone/blog_details", text: "Blog Details" },
];
const itemsPages = [
  { href: "/timezone/blog", text: "Cart" },
  { href: "/timezone/blog_details", text: "Element" },
  { href: "/timezone/blog_details", text: "Confirmation" },
  { href: "/timezone/blog_details", text: "Product Checkout" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={`flex sticky top-0 w-[100%] justify-between bg-white z-[9999] items-center shadow-custom px-[25px] transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="cursor-pointer">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
          alt="lo"
        />
      </div>
      <div>
        <nav>
          <ul className="flex text-[#141517] font-[600] ">
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/home" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/home">Home</Link>
            </li>
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/shop" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/shop">Shop</Link>
            </li>
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/about" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/about">About</Link>
            </li>
            <li className="relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="">Latest</Link>
              <DropdownMenu items={itemsLatest} />
              <span
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
                className="absolute top-[20px] flex justify-center items-center right-[-13px] bg-[#FF003C] text-white text-[10px]  px-2 pt-1 rounded-[8px]"
              >
                HOT
              </span>
            </li>
            <li className=" relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="/timezone/blog">Blog</Link>
              <DropdownMenu items={itemsBlog} />
            </li>
            <li className="relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="">Pages</Link>
              <DropdownMenu items={itemsPages} />
            </li>
            <li className="py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
              <Link href="/timezone/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div
          onClick={openModal}
          className="py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer"
        >
          <BsSearch />
        </div>
        <SearchModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer">
          <GoPerson />
        </div>
        <div className="py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer">
          <BsCart3 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
