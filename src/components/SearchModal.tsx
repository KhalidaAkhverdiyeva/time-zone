import React from 'react';
import { IoCloseSharp } from "react-icons/io5";


interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black h-[100vh]  flex justify-center items-center z-50">
      <div className="bg-transparent p-6 rounded-lg relative ">
        <div className='absolute top-[-230px] left-[230px] w-[70px] h-[70px] bg-[#333333] flex justify-center items-center rounded-full'>
        <button
          onClick={onClose}
          className=" text-[40px] text-white "
        >
          <IoCloseSharp />
        </button>
        </div>
       
        <input
          type="text"
          placeholder="Searching key..."
          className="w-[500px] bg-transparent focus:outline-none  py-2 text-[#999]   border-b-solid border-b-[2px] border-b-[#dccccc] text-[40px] "
        />
      </div>
    </div>
  );
};

export default SearchModal;