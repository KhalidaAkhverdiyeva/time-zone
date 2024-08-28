
import React from 'react'
import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";





const Navbar = () => {
  return (
    <div className='flex justify-between items-center shadow-custom px-[25px]'>

        <div>
            <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp" alt="lo" />
        </div>
        <div>
            <nav>
                <ul className='flex text-[#141517] font-[600] '>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Home</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Shop</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">About</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Latest</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Blog</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Pages</a>
                    </li>
                    <li className='py-[41px] px-[21px]'>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='flex '>
            <div className='py-[31px] px-[19px] text-[20px]'><BsSearch /></div>
            <div className='py-[31px] px-[19px] text-[20px]'><GoPerson /></div>
            <div className='py-[31px] px-[19px] text-[20px]'><BsCart3 /></div>

        </div>
    </div>
  )
}

export default Navbar