import React from 'react'
import { FaPlay } from "react-icons/fa";

const PlayBtn = () => {
  return (
    <div className='border-solid  flex justify-center items-center border-white border-[1px] rounded-full absolute top-[50%] right-[50%] w-[85px] h-[85px] '>
        <FaPlay className='text-white text-[34px] '/>
    </div>
  )
}

export default PlayBtn