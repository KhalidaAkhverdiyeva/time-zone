import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaComments } from "react-icons/fa6";

const BlogCard = () => {
  return (
    <div className="shadow-blogShadow mb-[50px]">
      <div className="relative">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp"
          alt=""
        />
        <div className="absolute flex flex-col rounded-[5px] bottom-[-20px] left-[40px] bg-[#ff2020] text-white py-[13px] px-[30px]">
          <span className="text-[30px]">15</span>
          <span>JAN</span>
        </div>
      </div>
      <div className="pt-[60px] pl-[35px] pr-[30px] pb-[35px]">
        <h4 className="text-[#0b1c39] font-[600] text-[24px] mb-[15px]">
          Google inks pact for new 35-storey office
        </h4>
        <p className="text-[#777] leading-[30px] font-[300]">
          That dominion stars lights dominion divide years for fourth have dont
          stars is that he earth it first without heaven in place seed it second
          morning saying.
        </p>
        <div className="flex gap-[10px] items-center mt-[20px] text-[#777] font-[300]">
          <div className="flex items-center gap-[7px]">
            <IoPersonSharp /> Travel, Lifestyle
          </div>
          <div className="w-[1px] h-[10px] bg-black"></div>
          <div className="flex items-center gap-[7px]">
            <FaComments />
            03 Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
