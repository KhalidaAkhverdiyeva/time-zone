import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="w-full max-w-[1170px] mx-auto flex px-[15px] md:px-[0px] gap-[30px] flex-col">
      <h4 className="text-[27px] font-[600] text-[#0b1c39]">Get in Touch</h4>
      <div className="flex flex-col md:flex-row gap-[100px]">
        <div className="flex flex-col gap-[50px] md:w-[64%]">
          <div className="flex flex-col gap-[20px]">
            <textarea
              placeholder="Enter Message"
              className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] h-[100px] leading-[1.5] resize-none"
            ></textarea>
            <div className="flex gap-[20px]">
              <textarea
                placeholder="Enter your name"
                className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] leading-[1.5] resize-none"
              ></textarea>
              <textarea
                placeholder="Email "
                className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300] leading-[1.5] resize-none"
              ></textarea>
            </div>
            <textarea
              placeholder="Enter subject"
              className="w-[100%] border-[1px] border-solid border-[#e5e6e9] text-[13px] py-[6px] px-[12px] font-[300]  leading-[1.5] resize-none"
            ></textarea>
          </div>
          <button className="text-white md:w-[15%] uppercase bg-[#FF2020] py-[12px] px-[25px] rounded-[5px]">
            send
          </button>
        </div>
        <div className="md:w-[34%] flex flex-col gap-[30px]">
          <div className="flex gap-[20px] items-center">
            <IoHomeOutline className="w-[30px] h-[30px] text-[#8a8a8a]" />
            <div>
              <h4>Buttonwood, California.</h4>
              <p className="text-[#8a8a8a] font-[400]">Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="flex gap-[20px] items-center">
            <FiPhoneCall className="w-[30px] h-[30px] text-[#8a8a8a]" />
            <div>
              <h4>+1 253 565 2365</h4>
              <p className="text-[#8a8a8a] font-[400]">Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex gap-[20px] items-center">
            <MdOutlineEmail className="w-[30px] h-[30px] text-[#8a8a8a]" />
            <div>
              <h4>support@colorlib.com</h4>
              <p className="text-[#8a8a8a] font-[400]">
                Send us your query anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
