import React from 'react'
import PopularHeadline from './PopularHeadline'
import PopularWatchCard from './PopularWatchCard'

const PopularItemSection = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto flex flex-col justify-center items-center mb-[200px]'>
        <PopularHeadline/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] w-[100%]'>
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png'
          />
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png'
          />
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png'
          />
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png'
          />
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png'
          />
          <PopularWatchCard
          img='https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png'
          />
        </div>
        <button className='relative py-[20px] px-[25px] text-white bg-[#FF2020]  font-[600] overflow-hidden group mt-[100px]'>
            <span className='relative z-10 uppercase'>View More Products</span>
            <span className='absolute inset-0 bg-[#4A4A4B] transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0'></span>
        </button>
    </div>
  )
}

export default PopularItemSection