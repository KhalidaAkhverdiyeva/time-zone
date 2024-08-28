import React from 'react'
import ChoiceCard from './ChoiceCard'

const ChoiceSection = () => {
  return (
    <div className='w-full max-w-[1170px] mx-auto py-[200px]'>
        <ChoiceCard
        order={2}
        url='https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png.webp'
        />
        <ChoiceCard
        order={1}
        url='https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch2.png.webp'
        />
    </div>
  )
}

export default ChoiceSection