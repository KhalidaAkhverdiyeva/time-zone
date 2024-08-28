
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";





const Navbar = () => {
  return (
    <div className='flex justify-between items-center shadow-custom px-[25px]'>

        <div className='cursor-pointer'>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="lo" />
        </div>
        <div>
            <nav>
                <ul className='flex text-[#141517] font-[600] '>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Home</a>
                    </li>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Shop</a>
                    </li>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">About</a>
                    </li>
                    <li className='relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Latest</a>
                        <span style={{ boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }} className="absolute top-[20px] flex justify-center items-center right-[-13px] bg-[#FF003C] text-white text-[10px]  px-2 pt-1 rounded-[8px]">HOT</span>
                    </li>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Blog</a>
                    </li>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Pages</a>
                    </li>
                    <li className='py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='flex  '>
            <div className='py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer'><BsSearch /></div>
            <div className='py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer'><GoPerson /></div>
            <div className='py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer'><BsCart3 /></div>

        </div>
    </div>
  )
}

export default Navbar