"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { CiLogout } from "react-icons/ci";

interface SignOutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignOutModal: React.FC<SignOutModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const auth = getAuth(app);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/login");
      onClose();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 flex items-start justify-end p-4 z-50"
    >
      <div className="bg-white px-[10px] p-2 rounded-lg shadow-lg w-[150px] mt-[70px]">
        <div
          onClick={handleSignOut}
          className="text-left text-black cursor-pointer rounded-md py-2 flex items-center gap-[10px] hover:text-[#FF2022] transition-all duration-400"
        >
          <CiLogout />
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default SignOutModal;
