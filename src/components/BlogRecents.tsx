import React from "react";

const BlogRecents = () => {
  return (
    <div className="my-[30px] bg-[#FBF9FF] p-[30px]">
      <div className="mb-[40px] pb-[15px] text-[20px] text-[#0b1c39] font-[500] border-b-solid border-b-[1px] border-b-[#f0e9ff]">
        Recent Post
      </div>
      <div className="flex gap-[20px] items-center mb-[20px]">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_1.png.webp"
          alt=""
        />
        <div>
          <p className="text-[#0b1c39] font-[500]">From life was you fish...</p>
          <span className="text-[14px] text-[#777]">January 12, 2019</span>
        </div>
      </div>
      <div className="flex gap-[20px] items-center mb-[20px]">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_2.png"
          alt=""
        />
        <div>
          <p className="text-[#0b1c39] font-[500]">The Amazing Huble</p>
          <span className="text-[14px] text-[#777]">2 hours ago</span>
        </div>
      </div>
      <div className="flex gap-[20px] items-center mb-[20px]">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_3.png"
          alt=""
        />
        <div>
          <p className="text-[#0b1c39] font-[500]">Astronomy Or Astrology</p>
          <span className="text-[14px] text-[#777]">3 hours ago</span>
        </div>
      </div>
      <div className="flex gap-[20px] items-center">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/post/post_4.png"
          alt=""
        />
        <div>
          <p className="text-[#0b1c39] font-[500]">Asteroids telescope</p>
          <span className="text-[14px] text-[#777]">January 12, 2019</span>
        </div>
      </div>
    </div>
  );
};

export default BlogRecents;
