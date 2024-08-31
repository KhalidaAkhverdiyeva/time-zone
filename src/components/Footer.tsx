import React from "react";
import { IoHeartSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { LiaBehance } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto mb-[100px] ">
      <div className="flex mb-[100px]">
        <div className="w-[25%]">
          <img
            className="mb-[40px]"
            src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png"
            alt=""
          />
          <p className="text-[#868c98] font-[300]">
            Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
            do eiusmod tem.
          </p>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-[700] text-[20px] mb-[40px]">Quick Links</h4>
          <ul className="text-[#868c98] font-[300] space-y-[10px] ">
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              About
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Offers & Discounts
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Get Coupon
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-[700] text-[20px] mb-[40px]">New Products</h4>
          <ul className="text-[#868c98] font-[300] space-y-[10px]">
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Woman Cloth
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Fashion Accessories
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Man Accessories
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Rubber made Toys
            </li>
          </ul>
        </div>
        <div className="w-[25%]">
          <h4 className=" font-[700] text-[20px] mb-[40px]">Support</h4>
          <ul className="text-[#868c98] font-[300] space-y-[10px]">
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Frequently Asked Questions
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Terms & Conditions
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-[#FF2020]">
              Report a Payment Issue
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-[5px]">
          <span className="text-[#888]">
            Copyright ©2024 All rights reserved | This template is made with
          </span>
          <IoHeartSharp className="text-[#FF2020]" />
          <span className="text-[#88] text-[#888]">by</span>
          <span className="text-[#FF2020]">Colorlib</span>
        </div>
        <div className="flex gap-[10px] text-[#222]">
          <FaTwitter className="w-[14px] h-[14px]" />
          <FaFacebookF className="w-[14px] h-[14px]" />
          <LiaBehance className="w-[14px] h-[14px] text-[20px]" />
          <FaGlobe className="w-[14px] h-[14px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
