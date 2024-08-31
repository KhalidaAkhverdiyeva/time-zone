import React from "react";
import { IoSearch } from "react-icons/io5";

const BlogSearch = () => {
  return (
    <div className="bg-[#FBF9FF] p-[30px] flex flex-col gap-[20px]">
      <div className="flex items-center ">
        <input
          type="text"
          placeholder="Search Keyword"
          className="bg-white border-solid w-[85%] border-[1px] h-[50px] border-[#f0e9ff] text-[13px] py-[6px] pl-[20px] pr-[12px]"
        />
        <button className="text-white w-[15%] bg-[#FF2020] font-[700] py-[4px] px-[15px] h-[50px] text-[20px]">
          <IoSearch />
        </button>
      </div>
      <button className="bg-[#FF2020] uppercase text-white py-[12px] px-[54px]">
        Search
      </button>
    </div>
  );
};

export default BlogSearch;
