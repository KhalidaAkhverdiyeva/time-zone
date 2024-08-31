import React from "react";
import { IoSearch } from "react-icons/io5";

const BlogNewsLatter = () => {
  return (
    <div className="bg-[#FBF9FF] p-[30px] flex flex-col gap-[20px] mb-[50px]">
      <div className="mb-[20px] pb-[15px] text-[20px] text-[#0b1c39] font-[500] border-b-solid border-b-[1px] border-b-[#f0e9ff]">
        Newsletter
      </div>
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Enter Email "
          className="bg-white border-solid w-[100%] border-[1px] h-[50px] border-[#f0e9ff] text-[13px] py-[6px] pl-[20px] pr-[12px]"
        />
      </div>
      <button className="bg-[#FF2020] uppercase text-white py-[12px] px-[54px]">
        Search
      </button>
    </div>
  );
};

export default BlogNewsLatter;
