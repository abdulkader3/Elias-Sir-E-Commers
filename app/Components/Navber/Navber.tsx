"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBalanceScaleLeft, FaBars, FaPhoneVolume, FaRegHeart } from "react-icons/fa";
import Logo from "../../../public/photos/logo.png";
import { IoBag, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch, IoMdPricetag } from "react-icons/io";
import Link from "next/link";
import { MdKeyboardArrowDown, MdOutlineMyLocation } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set());
  const [activeButton, setActiveButton] = useState<"main" | "categories">("main");

  useEffect(() => {
    if (mobileNavbar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileNavbar]);

  const styles = `
    @keyframes slideInFromLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOutToLeft {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(-100%);
        opacity: 0;
      }
    }
    .navbar-overlay {
      animation: slideInFromLeft 0.4s ease-out forwards;
    }
    .navbar-overlay.hide {
      animation: slideOutToLeft 0.4s ease-in forwards;
    }
  `;

  const handleNavbarButton = () => {
    setMobileNavbar(true);
    setIsClosing(false);
  };

  const handleNavbarButtonHide = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileNavbar(false);
      setIsClosing(false);
    }, 400);
  };

  const toggleMenu = (menuName: string) => {
    const newMenus = new Set(expandedMenus);
    if (newMenus.has(menuName)) {
      newMenus.delete(menuName);
    } else {
      newMenus.add(menuName);
    }
    setExpandedMenus(newMenus);
  };

  return (
    <>
      <style>{styles}</style>

      {/* Top Header */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex gap-6 items-center">
              <select id="Currency" name="Currency" className="focus:outline-none bg-transparent">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="BDT">BDT</option>
              </select>
              <select id="Language" name="Language" className="focus:outline-none bg-transparent">
                <option value="E">English</option>
                <option value="F">Français</option>
                <option value="D">Deutsch</option>
              </select>
              <div className="hidden md:flex items-center gap-6 text-gray-700">
                <div className="w-px h-4 bg-gray-300"></div>
                <Link href="#" className="hover:text-blue-600">Blog</Link>
                <Link href="#" className="hover:text-blue-600">Content</Link>
                <Link href="#" className="hover:text-blue-600">My Account</Link>
                <div className="flex items-center gap-1">
                  <CiUser className="text-lg" />
                  <Link href="#" className="hover:text-blue-600">Sign In</Link>/
                  <Link href="#" className="hover:text-blue-600">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Mobile Navbar */}
          <div className="md:hidden flex items-center justify-between py-4">
            <button onClick={handleNavbarButton} className="text-2xl">
              <FaBars />
            </button>

            {mobileNavbar && (
              <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 navbar-overlay ${isClosing ? "hide" : ""}`}>
                <div className="fixed left-0 top-0 h-full w-4/5 bg-gray-900 text-white flex flex-col p-5">
                  <button onClick={handleNavbarButtonHide} className="text-3xl text-white self-end mb-4">
                    <RxCross2 />
                  </button>

                  {/* Search Bar */}
                  <div className="mb-5 relative">
                    <input className="w-full px-4 py-2 rounded-full bg-gray-300 border-0 focus:outline-none" type="search" placeholder="Search" />
                    <IoIosSearch className="absolute right-4 top-2 text-2xl text-gray-600" />
                  </div>

                  {/* Tab Buttons */}
                  <div className="flex gap-0 mb-4 border-b border-gray-700">
                    <button onClick={() => setActiveButton("main")} className={`flex-1 py-2 font-medium ${activeButton === "main" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"}`}>
                      Main Menu
                    </button>
                    <button onClick={() => setActiveButton("categories")} className={`flex-1 py-2 font-medium ${activeButton === "categories" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"}`}>
                      Categories
                    </button>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto">
                    <ul className="space-y-0">
                      <li className="border-b border-gray-700">
                        <Link href="/" className="block py-3 hover:text-blue-400">Home</Link>
                      </li>
                      {["Shop", "Vendor", "Blog", "Pages", "Elements"].map((menu) => (
                        <li key={menu} className="border-b border-gray-700">
                          <button onClick={() => toggleMenu(menu.toLowerCase())} className="w-full flex items-center justify-between py-3 hover:text-blue-400">
                            <span>{menu}</span>
                            <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has(menu.toLowerCase()) ? "rotate-180" : ""}`} />
                          </button>
                          {expandedMenus.has(menu.toLowerCase()) && (
                            <ul className="pl-4 space-y-2 text-gray-400 pb-2">
                              <li><Link href="#" className="hover:text-blue-400 block">{menu} Page</Link></li>
                              <li><Link href="#" className="hover:text-blue-400 block">{menu} Layouts</Link></li>
                              <li><Link href="#" className="hover:text-blue-400 block">{menu} Items</Link></li>
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <Image src={Logo} alt="Logo" width={144} height={50} />
            <button className="text-2xl"><IoBagHandleOutline /></button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between py-8 gap-8">
            <Image src={Logo} alt="Logo" width={144} height={50} />

            {/* Search Bar */}
            <div className="flex-1 flex items-center border-2 border-blue-600 rounded-lg">
              <select className="px-4 py-2 bg-transparent focus:outline-none">
                <option>All Categories</option>
                <option>Fashion</option>
                <option>Furniture</option>
                <option>Electronics</option>
                <option>Sports</option>
              </select>
              <div className="w-px h-8 bg-blue-600"></div>
              <input type="search" placeholder="Search products..." className="flex-1 px-4 py-2 focus:outline-none" />
              <button className="px-4 text-xl text-blue-600"><IoSearchOutline /></button>
            </div>

            {/* Contact Info */}
            <div className="flex items-center gap-2">
              <FaPhoneVolume className="text-xl text-blue-600" />
              <div className="text-sm">
                <p className="text-gray-500">Live Chat or:</p>
                <p className="font-bold">0 (800) 123-456</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-8 text-gray-700 border-l border-gray-300 pl-8">
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <FaRegHeart className="text-xl" />
                <span className="text-xs">Wishlist</span>
              </button>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <FaBalanceScaleLeft className="text-xl" />
                <span className="text-xs">Compare</span>
              </button>
              <button className="flex flex-col items-center gap-1 hover:text-blue-600">
                <IoBag className="text-xl" />
                <span className="text-xs">Cart</span>
              </button>
            </div>
          </div>

          {/* Bottom Menu */}
          <div className="hidden md:flex items-center justify-between border-t border-gray-200 py-4 text-sm">
            
            <div className="flex gap-6">
              <Link href="#" className="hover:text-blue-600 transition  flex items-center gap-2"> <TbCategoryPlus/> Browse Categories</Link>

              <Link href="#" className="hover:text-blue-600 transition">Home</Link>
              <Link href="#" className="hover:text-blue-600 transition">Shop</Link>
              <Link href="#" className="hover:text-blue-600 transition">Vendor</Link>
              <Link href="#" className="hover:text-blue-600 transition">Blog</Link>
              <Link href="#" className="hover:text-blue-600 transition">Pages</Link>
              <Link href="#" className="hover:text-blue-600 transition">Elements</Link>

            </div>


            <div className="flex gap-6">
              <Link href="#" className="hover:text-blue-600  flex items-center gap-2"> <MdOutlineMyLocation/> Track Order</Link>
              <Link href="#" className="hover:text-blue-600  flex items-center gap-2 "> <IoMdPricetag/> Daily Deals</Link>
            </div>


          </div>



        </div>
      </div>
    </>
  );
};

export default Navbar;
