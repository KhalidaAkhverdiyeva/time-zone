import React from 'react'
import { IoHeartSharp } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto mb-[200px] '>
        <div className='flex mb-[100px]'>
            <div className='w-[25%]'>
                <img className='mb-[40px]' src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo2_footer.png" alt="" />
                <p className='text-[#868c98] font-[300]'>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
            </div>
            <div className='w-[25%]'>
                <h4 className=' font-[700] text-[20px] mb-[40px]'>Quick Links</h4>
                <ul className='text-[#868c98] font-[300] space-y-[10px] '>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Offers & Discounts</li>
                    <li className='cursor-pointer'>Get Coupon</li>
                    <li className='cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <div className='w-[25%]'>
                <h4 className=' font-[700] text-[20px] mb-[40px]'>New Products</h4>
                    <ul className='text-[#868c98] font-[300] space-y-[10px]'>
                        <li className='cursor-pointer'>Woman Cloth</li>
                        <li className='cursor-pointer'>Fashion Accessories</li>
                        <li className='cursor-pointer'>Man Accessories</li>
                        <li className='cursor-pointer'>Rubber made Toys</li>
                    </ul>

            </div>
            <div className='w-[25%]'>
            <h4 className=' font-[700] text-[20px] mb-[40px]'>Support</h4>
                    <ul className='text-[#868c98] font-[300] space-y-[10px]'>
                        <li className='cursor-pointer'>Frequently Asked Questions</li>
                        <li className='cursor-pointer'>Terms & Conditions</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>Report a Payment Issue</li>
                    </ul>
            </div>
        </div>
        <div>
            <div className='flex items-center'>
                <span className='text-[#FF2020]'>Copyright ©2024 All rights reserved | This template is made with</span>
                <IoHeartSharp className='text-[#FF2020]' />
                <span className='text-[#FF2020]'>by</span>
                <span className='text-[#FF2020]'>Colorlib</span>

            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer