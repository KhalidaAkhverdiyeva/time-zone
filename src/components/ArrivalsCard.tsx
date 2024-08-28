import React from 'react'

type ImgType ={
    img:string
}
const ArrivalsCard: React.FC<ImgType> = ({img}) => {
  return (
    <div className='text-center '>
        <img className='mb-[30px] ' src={img} alt="" />
        <p className='text-[24px] font-[700] text-[#444444]'>Thermo Ball Etip Gloves</p>
        <p className='font-[500] text-[18px] text-[#ff2020]'>$ 45,743</p>
    </div>
  )
}

export default ArrivalsCard