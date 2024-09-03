"use client";

import React from "react";

interface DropdownMenuProps {
  items: { href: string; text: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  return (
    <div className="relative group z-[9999]">
      <div className="absolute left-[-20px] top-[38px] mt-1 w-[170px] bg-white border-t-solid border-t-[3px] border-t-[#ff2020] border-gray-200 rounded-md shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block px-4 py-[14px] text-gray-700 hover:text-[#ff2020] transition-colors duration-300 ease-in-out"
          >
            {item.text}
          </a>
        ))}
        <div
          className="absolute left-[20%] top-[-17px] w-0 h-0 border-[8px] border-t-transparent border-b-white border-l-transparent border-r-transparent transform -translate-x-1/2"
          style={{ borderBottomColor: "#ff2020" }}
        ></div>
      </div>
    </div>
  );
};

export default DropdownMenu;
