import Image from "next/image";
import React from "react";

const MosaicSection = () => {
  return (
    <div className="flex justify-center gap-[30px] mb-[50px] md:mb-[200px] flex-wrap md:flex-nowrap">
      <div className="relative overflow-hidden group">
        <Image
          className="transform transition-transform duration-700 scale-105 group-hover:scale-100 object-cover "
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery1.png.webp"
          alt=""
          width={945}
          height={648}
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-700 group-hover:opacity-20 cursor-pointer"></div>
      </div>
      <div className="relative overflow-hidden group">
        <Image
          className="transform transition-transform duration-700 scale-105 group-hover:scale-100 object-cover "
          src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery2.png.webp"
          alt=""
          width={458}
          height={688}
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-700 group-hover:opacity-20 cursor-pointer"></div>
      </div>
      <div className="flex flex-col gap-[30px] justify-between overflow-hidden">
        <div className="relative overflow-hidden group">
          <Image
            className="transform transition-transform duration-700 scale-105 group-hover:scale-100 object-cover "
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery3.png.webp"
            alt=""
            width={458}
            height={324}
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-700 group-hover:opacity-20 cursor-pointer"></div>
        </div>
        <div className="relative overflow-hidden group">
          <Image
            className="transform transition-transform duration-700 scale-105 group-hover:scale-100 object-cover "
            src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/gallery4.png.webp"
            alt=""
            width={458}
            height={324}
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-700 group-hover:opacity-20 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default MosaicSection;
