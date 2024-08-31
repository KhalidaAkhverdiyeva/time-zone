import React from "react";

const Skeleton = () => {
  return (
    <div>
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="shadow-blogShadow mb-[50px] animate-pulse">
          <div className="relative">
            <div className="bg-gray-300 h-[350px] w-full rounded"></div>
          </div>
          <div className="pt-[60px] pl-[35px] pr-[30px] pb-[35px]">
            <div className="bg-gray-400 h-[30px] w-[70%] rounded mb-[15px]"></div>
            <div className="bg-gray-300 h-[20px] w-[90%] rounded mb-[10px]"></div>
            <div className="bg-gray-300 h-[20px] w-[80%] rounded mb-[10px]"></div>
            <div className="bg-gray-300 h-[20px] w-[60%] rounded mb-[20px]"></div>
            <div className="flex gap-[10px] items-center text-[#777] font-[300]">
              <div className="bg-gray-400 h-[20px] w-[30%] rounded"></div>
              <div className="bg-gray-400 h-[20px] w-[30%] rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
