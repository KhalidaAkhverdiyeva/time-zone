import React from 'react'

const HeroSecText = () => {
  return (
    <div className='overflow-hidden'>
        <h1 className='text-[96px] font-[700] text-[#0B1C39] mb-[26px] animate-slideIn'>Select Your New Perfect Style</h1>
        <p className='mb-[60px] pr-[50px] text-[18px] animate-slideInP'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.</p>
        <button className='relative py-[15px] px-[25px] text-white bg-[#4A4A4B] font-[600] overflow-hidden group'>
        <span className='relative z-10'>SHOP NOW</span>
        <span className='absolute inset-0 bg-[#FF2020] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0'></span>
        </button>
    </div>
  )
}

export default HeroSecText