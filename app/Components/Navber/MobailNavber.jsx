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

const MobailNavber = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(new Set());
  const [activeButton, setActiveButton] = useState("main");

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
      
    </>
  );
};

export default MobailNavber;
