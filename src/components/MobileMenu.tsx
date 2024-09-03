// import { useState } from "react";
// import DropdownMenu from "./DropdownMenu";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// function MobileMenu({ isMobileMenuOpen, itemsLatest, itemsBlog, itemsPages }) {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
//   };
//   const pathname = usePathname();
//   return (
//     isMobileMenuOpen && (
//       <div className="absolute top-full left-0 w-full bg-white z-[9998]">
//         <ul className="flex flex-col text-[#141517] font-[600]">
//           <li
//             className={`py-[15px] px-[21px] ${
//               pathname === "/timezone/home" ? "text-[#E3411A]" : "text-black"
//             } hover:text-[#FF1D20] transition-colors duration-500`}
//           >
//             <Link href="/timezone/home">Home</Link>
//           </li>
//           <li
//             className={`py-[15px] px-[21px] ${
//               pathname === "/timezone/shop" ? "text-[#E3411A]" : "text-black"
//             } hover:text-[#FF1D20] transition-colors duration-500`}
//           >
//             <Link href="/timezone/shop">Shop</Link>
//           </li>
//           <li
//             className={`py-[15px] px-[21px] ${
//               pathname === "/timezone/about" ? "text-[#E3411A]" : "text-black"
//             } hover:text-[#FF1D20] transition-colors duration-500`}
//           >
//             <Link href="/timezone/about">About</Link>
//           </li>
//           <li className="relative py-[15px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
//             <div onClick={() => toggleDropdown("latest")}>
//               <Link href="">Latest</Link>
//               <span
//                 style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
//                 className="absolute top-[10px] flex justify-center items-center right-[-13px] bg-[#FF003C] text-white text-[10px]  px-2 pt-1 rounded-[8px]"
//               >
//                 HOT
//               </span>
//             </div>
//             {activeDropdown === "latest" && (
//               <DropdownMenu items={itemsLatest} />
//             )}
//           </li>
//           <li className="relative py-[15px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
//             <div onClick={() => toggleDropdown("blog")}>
//               <Link href="/timezone/blog">Blog</Link>
//             </div>
//             {activeDropdown === "blog" && <DropdownMenu items={itemsBlog} />}
//           </li>
//           <li className="relative py-[15px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
//             <div onClick={() => toggleDropdown("pages")}>
//               <Link href="">Pages</Link>
//             </div>
//             {activeDropdown === "pages" && <DropdownMenu items={itemsPages} />}
//           </li>
//           <li className="py-[15px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
//             <Link href="/timezone/contact">Contact</Link>
//           </li>
//         </ul>
//       </div>
//     )
//   );
// }
