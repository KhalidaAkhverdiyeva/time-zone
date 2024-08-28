import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { IoLockOpenOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";




const OrangeBox = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto bg-[#EA0000] flex justify-between mb-[200px] text-white'>
      <div className='p-[43px] '>
       <BsBoxSeam className='text-white w-[40px] h-[40px]' />
        <h4 className='text-white text-[20px] font-[700] pt-[20px] pb-[15px]'>Free Shipping Method</h4>
        <p className='leading-[30px] text-[20px] text-[#D3D1D1]'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
      <div className='p-[43px]'>
       <IoLockOpenOutline className='text-white w-[40px] h-[40px] ' />
        <h4 className='text-white text-[20px] font-[700] pt-[20px] pb-[15px]'>Secure Payment System</h4>
        <p className='leading-[30px] text-[20px] text-[#D3D1D1]'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
      <div className='p-[43px]'>
       <LuRefreshCcw className='text-white w-[40px] h-[40px]' />
        <h4 className='text-white text-[20px] font-[700] pt-[20px] pb-[15px]'>Secure Payment System</h4>
        <p className='leading-[30px] text-[20px] text-[#D3D1D1]'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
      </div>
      

    </div>
  )
}

export default OrangeBox