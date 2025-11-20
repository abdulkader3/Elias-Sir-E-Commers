"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBalanceScaleLeft,
  FaPhoneVolume,
  FaRegHeart,
  FaTshirt,
  FaHeartbeat,
  FaGift,
  FaGamepad,
  FaCamera,
  FaAngleRight,
} from "react-icons/fa";
import { GiWoodenChair, GiCookingPot, GiDiamonds } from "react-icons/gi";
import { IoBag, IoSearchOutline } from "react-icons/io5";
import { IoMdPricetag } from "react-icons/io";
import {
  MdOutlineMyLocation,
  MdHomeFilled,
  MdDevices,
  MdPhoneIphone,
} from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import Logo from "../../../public/photos/logo.png";
import { useCart } from "../../context/CartContext";
// Components
import HoverComponent from "../Shop/HoverComponent";

const Desktop = () => {
  const { getTotalItems } = useCart();
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showShopDropdown, setShowShopDropdown] = useState(false);

  const categories = [
    { name: "Fashion", icon: FaTshirt },
    { name: "Home & Garden", icon: MdHomeFilled },
    { name: "Electronics", icon: MdDevices },
    { name: "Furniture", icon: GiWoodenChair },
    { name: "Healthy & Beauty", icon: FaHeartbeat },
    { name: "Gift Ideas", icon: FaGift },
    { name: "Toy & Games", icon: FaGamepad },
    { name: "Cooking", icon: GiCookingPot },
    { name: "Smart Phones", icon: MdPhoneIphone },
    { name: "Cameras & Photo", icon: FaCamera },
    { name: "Accessories", icon: GiDiamonds },
    { name: "View All Categories", icon: FaAngleRight },
  ];

  const cartCount = getTotalItems();

  return (
    <>
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
          <input
            type="search"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="px-4 text-xl text-blue-600">
            <IoSearchOutline />
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex items-center gap-2">
          <FaPhoneVolume className=" shrink-0 md:text-[18px] lg:text-xl text-blue-600" />
          <div className=" shrink-0 md:text-[12px] lg:text-sm">
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
          <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-blue-600 relative">
            <IoBag className="text-xl" />
            <span className="text-xs">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/login" className="flex flex-col items-center gap-1 hover:text-blue-600">
            <span className="text-xs">Login</span>
          </Link>
          <Link href="/register" className="flex flex-col items-center gap-1 hover:text-blue-600">
            <span className="text-xs">Register</span>
          </Link>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="hidden md:flex items-center justify-between border-t border-gray-200 py-4 text-sm">
        <div className="flex gap-6">
          <div
            className="relative"
            onMouseEnter={() => setShowCategoryDropdown(true)}
            onMouseLeave={() => setShowCategoryDropdown(false)}
          >
            <Link
              href="#"
              className="hover:text-blue-600 transition flex items-center gap-2"
            >
              <TbCategoryPlus /> Browse Categories
            </Link>

            {/* Dropdown Menu */}
            {showCategoryDropdown && (
              <div className="absolute left-0 top-full mt-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-max pointer-events-auto max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 gap-0">
                  {categories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <Link
                        key={index}
                        href="#"
                        className="px-6 py-3 flex items-center gap-3 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-b-0 whitespace-nowrap"
                      >
                        <IconComponent className="text-lg shrink-0" />
                        <span>{category.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>


          <div
            className="relative"
            onMouseEnter={() => setShowShopDropdown(true)}
            onMouseLeave={() => setShowShopDropdown(false)}
          >
            <Link href="/shop" className="hover:text-blue-600 transition">
              Shop
            </Link>
            {showShopDropdown && (
              <div className="absolute left-0 top-full mt-0 z-50">
                <HoverComponent />
              </div>
            )}
          </div>


          <Link href="#" className="hover:text-blue-600 transition">
            Vendor
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Blog
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Pages
          </Link>
          <Link href="#" className="hover:text-blue-600 transition">
            Elements
          </Link>
        </div>

        <div className="flex gap-6">
          <Link
            href="#"
            className="hover:text-blue-600  flex items-center gap-2"
          >
            {" "}
            <MdOutlineMyLocation /> Track Order
          </Link>
          <Link
            href="#"
            className="hover:text-blue-600  flex items-center gap-2 "
          >
            {" "}
            <IoMdPricetag /> Daily Deals
          </Link>
        </div>
      </div>
    </>
  );
};

export default Desktop;
