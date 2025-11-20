"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../../public/photos/logo.png";
import { useCart } from "../../context/CartContext";

const MobailNavber = () => {
  const { getTotalItems } = useCart();
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(new Set());
  const [activeButton, setActiveButton] = useState("main");

  const cartCount = getTotalItems();

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

  const toggleMenu = (menuName) => {
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
                        <input className="w-full px-4 py-2 pr-10 rounded-full bg-gray-300 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500" type="search" placeholder="Search" />
                        <IoIosSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-gray-600 pointer-events-none" />
                      </div>
    
                      {/* Tab Buttons */}
                      <div className="flex gap-0 mb-4 border-b border-gray-700">
                        <button onClick={() => setActiveButton("main")} className={`flex-1 py-2 text-center font-medium text-sm ${activeButton === "main" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"}`}>
                          Main Menu
                        </button>
                        <button onClick={() => setActiveButton("categories")} className={`flex-1 py-2 text-center font-medium text-sm ${activeButton === "categories" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"}`}>
                          Categories
                        </button>
                        <button onClick={() => setActiveButton("account")} className={`flex-1 py-2 text-center font-medium text-sm ${activeButton === "account" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-400"}`}>
                          Account
                        </button>
                      </div>
    
                      {/* Menu Items */}
                      <div className="flex-1 overflow-y-auto">
                        {activeButton === "main" ? (
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
                        ) : activeButton === "categories" ? (
                          <ul className="space-y-0">
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Fashion</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Home & Garden</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Electronics</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Furniture</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Healthy & Beauty</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Gift Ideas</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Toy & Games</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Cooking</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Smart Phones</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Cameras & Photo</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="#" className="block py-3 hover:text-blue-400">Accessories</Link>
                            </li>
                          </ul>
                        ) : (
                          <ul className="space-y-0">
                            <li className="border-b border-gray-700">
                              <Link href="/login" className="block py-3 hover:text-blue-400">Login</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="/register" className="block py-3 hover:text-blue-400">Register</Link>
                            </li>
                            <li className="border-b border-gray-700">
                              <Link href="/cart" className="block py-3 hover:text-blue-400">Cart</Link>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}
    
                <Image src={Logo} alt="Logo" width={144} height={50} />
                <Link href="/cart" className="text-2xl relative"><IoBagHandleOutline />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                </Link>
              </div>
      
    </>
  );
};

export default MobailNavber;
