import React from 'react'

type ImgType ={
    img:string
}
const ArrivalsCard: React.FC<ImgType> = ({img}) => {
  return (
    <div >
        <img src={img} alt="" />
        <p>Thermo Ball Etip Gloves</p>
        <p>$ 45,743</p>
    </div>
  )
}

export default ArrivalsCard