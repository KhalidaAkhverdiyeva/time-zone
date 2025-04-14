import Image from "next/image";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex items-center justify-center w-[150x] h-[150px]">
        <Image
          src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
          alt="Logo"
          className="m-[10px]"
          width={500}
          height={500}
        />

        <div className="absolute w-full h-full border-[3px] border-t-orange-500 border-b-transparent border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;
