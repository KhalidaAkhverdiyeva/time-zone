import React from 'react'
import HeroSecText from './HeroSecText'

const HeroSection = () => {
  return (
    <div className='bg-[#F0F0F2]'>
        <div className=' w-full max-w-[1170px] mx-auto flex justify-between items-center'>
            <div className='w-[64%]'>
              < HeroSecText/>
            </div>
            <div className='mr-[-25px] '>
                <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection