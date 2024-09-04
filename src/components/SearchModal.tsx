import React from "react";
import { IoCloseSharp } from "react-icons/io5";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black h-[100vh]  flex justify-center items-center z-9999">
      <div className="bg-transparent p-6 rounded-lg relative w-[250px] ">
        <div className="absolute md:top-[-230px] top-[-130px] left-[130px] md:left-[230px] w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-[#333333] flex justify-center items-center rounded-full">
          <button
            onClick={onClose}
            className=" text-[26px] md:text-[40px] text-white "
          >
            <IoCloseSharp />
          </button>
        </div>

        <input
          type="text"
          placeholder="Searching key..."
          className="w-[250px] md:w-[500px] bg-transparent focus:outline-none  py-2 text-[#999]   border-b-solid border-b-[2px] border-b-[#dccccc] text-[26px] md:text-[40px]"
        />
      </div>
    </div>
  );
};

export default SearchModal;
