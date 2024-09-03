import React, { useState, useEffect } from "react";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import SearchModal from "./SearchModal";
import Link from "next/link";
import SignOutModal from "./SignOutModal";
import { FaBars, FaTimes } from "react-icons/fa";

const itemsLatest = [
  { href: "/timezone/shop", text: "Product List" },
  { href: "/timezone/product_details", text: "Product Details" },
];
const itemsBlog = [
  { href: "/timezone/blog", text: "Blog" },
  { href: "/timezone/blog_details", text: "Blog Details" },
];
const itemsPages = [
  { href: "/timezone/cart", text: "Cart" },
  { href: "/timezone/blog_details", text: "Element" },
  { href: "/timezone/blog_details", text: "Confirmation" },
  { href: "/timezone/blog_details", text: "Product Checkout" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleSignOutModal = () => setIsSignOutModalOpen((prev) => !prev);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleDropdownToggle = (dropdown: any) => {
    setOpenDropdown(openDropdown === dropdown ? "" : dropdown);
  };

  return (
    <div
      className={`flex sticky top-0 w-[100%] justify-between bg-white z-[9999] items-center shadow-custom px-[25px] transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo Section */}
      <div className="cursor-pointer">
        <img
          src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png.webp"
          alt="logo"
        />
      </div>

      {/* Menu Section (ul) */}
      <div className="hidden md:flex md:order-2">
        <nav>
          <ul className="flex text-[#141517] font-[600]">
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/home" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/home">Home</Link>
            </li>
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/shop" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/shop">Shop</Link>
            </li>
            <li
              className={`py-[41px] px-[21px] ${
                pathname === "/timezone/about" ? "text-[#E3411A]" : "text-black"
              } hover:text-[#FF1D20] transition-colors duration-500`}
            >
              <Link href="/timezone/about">About</Link>
            </li>
            <li className="relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="#">Latest</Link>
              <DropdownMenu items={itemsLatest} />
              <span
                style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)" }}
                className="absolute top-[20px] flex justify-center items-center right-[-13px] bg-[#FF003C] text-white text-[10px]  px-2 pt-1 rounded-[8px]"
              >
                HOT
              </span>
            </li>
            <li className=" relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="/timezone/blog">Blog</Link>
              <DropdownMenu items={itemsBlog} />
            </li>
            <li className="relative py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500 group">
              <Link href="#">Pages</Link>
              <DropdownMenu items={itemsPages} />
            </li>
            <li className="py-[41px] px-[21px] hover:text-[#FF1D20] transition-colors duration-500">
              <Link href="/timezone/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Icons Section (Search, Person, Cart) */}
      <div className="flex md:order-3">
        <div
          onClick={openModal}
          className="py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer"
        >
          <BsSearch />
        </div>
        <SearchModal isOpen={isModalOpen} onClose={closeModal} />
        <div className="relative py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer">
          <GoPerson onClick={toggleSignOutModal} />
          <SignOutModal
            isOpen={isSignOutModalOpen}
            onClose={toggleSignOutModal}
          />
        </div>
        <a href="/timezone/cart">
          <div className="py-[31px] px-[19px] text-[20px] hover:text-[#FF1D20] transition-colors duration-500 cursor-pointer">
            <BsCart3 />
          </div>
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center order-3">
        <button onClick={toggleMobileMenu} className="text-[24px]">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (ul) */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-[9997]"
          ></div>

          <div className="absolute top-full left-0 w-full bg-white z-[9998] transition-transform duration-300 transform">
            <ul className="flex flex-col text-[#141517] font-[600]">
              <li
                onClick={closeMobileMenu}
                className={`py-[15px] px-[21px] ${
                  pathname === "/timezone/home"
                    ? "text-[#E3411A]"
                    : "text-black"
                } hover:text-[#FF1D20] transition-colors duration-500`}
              >
                <Link href="/timezone/home">Home</Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className={`py-[15px] px-[21px] ${
                  pathname === "/timezone/shop"
                    ? "text-[#E3411A]"
                    : "text-black"
                } hover:text-[#FF1D20] transition-colors duration-500`}
              >
                <Link href="/timezone/shop">Shop</Link>
              </li>
              <li
                onClick={closeMobileMenu}
                className={`py-[15px] px-[21px] ${
                  pathname === "/timezone/about"
                    ? "text-[#E3411A]"
                    : "text-black"
                } hover:text-[#FF1D20] transition-colors duration-500`}
              >
                <Link href="/timezone/about">About</Link>
              </li>
              {/* Latest Dropdown */}
              <li className="relative py-[15px] px-[21px]">
                <button
                  onClick={() => handleDropdownToggle("latest")}
                  className="flex justify-between w-full hover:text-[#FF1D20] transition-colors duration-500"
                >
                  Latest
                  <span>{openDropdown === "latest" ? "-" : "+"}</span>
                </button>
                {openDropdown === "latest" && (
                  <ul className="pl-4 mt-2">
                    {itemsLatest.map((item, index) => (
                      <li
                        key={index}
                        onClick={closeMobileMenu}
                        className="py-2"
                      >
                        <Link href={item.href}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* Blog Dropdown */}
              <li className="relative py-[15px] px-[21px]">
                <button
                  onClick={() => handleDropdownToggle("blog")}
                  className="flex justify-between w-full hover:text-[#FF1D20] transition-colors duration-500"
                >
                  Blog
                  <span>{openDropdown === "blog" ? "-" : "+"}</span>
                </button>
                {openDropdown === "blog" && (
                  <ul className="pl-4 mt-2">
                    {itemsBlog.map((item, index) => (
                      <li
                        key={index}
                        onClick={closeMobileMenu}
                        className="py-2"
                      >
                        <Link href={item.href}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* Pages Dropdown */}
              <li className="relative py-[15px] px-[21px]">
                <button
                  onClick={() => handleDropdownToggle("pages")}
                  className="flex justify-between w-full hover:text-[#FF1D20] transition-colors duration-500"
                >
                  Pages
                  <span>{openDropdown === "pages" ? "-" : "+"}</span>
                </button>
                {openDropdown === "pages" && (
                  <ul className="pl-4 mt-2">
                    {itemsPages.map((item, index) => (
                      <li
                        key={index}
                        onClick={closeMobileMenu}
                        className="py-2"
                      >
                        <Link href={item.href}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
                onClick={closeMobileMenu}
                className={`py-[15px] px-[21px] ${
                  pathname === "/timezone/contact"
                    ? "text-[#E3411A]"
                    : "text-black"
                } hover:text-[#FF1D20] transition-colors duration-500`}
              >
                <Link href="/timezone/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
