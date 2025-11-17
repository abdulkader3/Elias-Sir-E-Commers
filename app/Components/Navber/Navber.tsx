'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Logo from '../../../public/photos/logo.png'
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiUser } from "react-icons/ci";

const page = () => {

  const [mobailNavber, setMobailNavber] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [expandedMenus, setExpandedMenus] = useState<Set<string>>(new Set())
  const [activeButton, setActiveButton] = useState<'main' | 'categories'>('main')

  // Prevent body scroll when mobile navbar is open
  useEffect(() => {
    if (mobailNavber) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobailNavber])

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
  `

  const hendelNavberButton = ()=>{
    setMobailNavber(true)
    setIsClosing(false)
  }
  const hendelNavberButtonHide = ()=>{
    setIsClosing(true)
    setTimeout(() => {
      setMobailNavber(false)
      setIsClosing(false)
    }, 400)
  }

  const toggleMenu = (menuName: string) => {
    const newMenus = new Set(expandedMenus)
    if (newMenus.has(menuName)) {
      newMenus.delete(menuName)
    } else {
      newMenus.add(menuName)
    }
    setExpandedMenus(newMenus)
  }

  return (
    <>
    <style>{styles}</style>

    {/* headers */}
      <div className=" container w-full h-[50px] bg-[#f5f6f8] text-[12px] flex justify-between items-center text-xl ">

        <p></p> 
        {/* welcome messge for leter */}



        <div className="flex gap-2 ">

          <select
          id="Currency"
          name="Currency"
          className=" focus:outline-none">

          <option value="USD" className=" text-black">
            USD
          </option>
          <option value="EUR" className=" text-black">
            EUR
          </option>
          <option value="BDT" className=" text-black">
            BDT
          </option>

        </select>
        
        <select
          id="Language"
          name="Language"
          className=" focus:outline-none">

          <option value="E" className=" text-black">
            English
          </option>
          <option value="EUR" className=" text-black">
            EUR
          </option>
          <option value="BDT" className=" text-black">
            BDT
          </option>

        </select>


        <div className=" hidden md:flex items-center gap-2 ">

          <div className="w-[2px] h-[20px] bg-[#2d2d2d92] "></div>

        <div className="flex gap-5 ">

          <div className="blog">
          <Link href={"#"}> Blog </Link>
        </div>

        <div className="content">
          <Link href={"#"}> Content </Link>
        </div>

        <div className="account">
          <Link href={"#"}> My Account </Link>
        </div>

        <div className="user flex items-center gap-1 ">
          <div className=" text-[17px] "><CiUser/></div>
          <Link href={"#"}> Sing In </Link>
          /
          <Link href={"#"}> Register </Link>
        </div>

        </div>
        </div>




        </div>



      </div>
    {/* headers */}

    {/* Main Nabver */}
    <div className=" container w-full py-[32px] flex items-center justify-between  ">

      {/* Icon manuber */}
      <div onClick={hendelNavberButton} className="manubarIcon ">
        <FaBars/>
      </div>

      {/* mobail manuber */}
      {
        mobailNavber && 
        <div className={`absolute left-0 top-0 w-full h-full pr-6 bg-[#00000083] navbar-overlay ${isClosing ? 'hide' : ''}`}>

        <div onClick={hendelNavberButtonHide} className=" text-[35px] text-white absolute right-1 top-5">
          <RxCross2 />
        </div>

        <div className="w-full h-full bg-[#202020] p-5 flex flex-col">

          {/* Search Bar */}
          <div className="w-full h-10 relative mb-5">
            <input className="p-5 w-full h-full border border-white bg-[#dadada] rounded-full outline-none focus:outline-none" type="search" placeholder="Search" />
            <div className="absolute top-2 right-5 text-2xl"><IoIosSearch/></div>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-0 mb-4">
            <button 
              onClick={() => setActiveButton('main')} 
              className={`flex-1 py-2 text-lg font-medium transition-colors ${activeButton === 'main' ? 'text-[#336699]' : 'text-white'}`}
            >
              Main Menu
            </button>
            <button 
              onClick={() => setActiveButton('categories')} 
              className={`flex-1 py-2 text-lg font-medium transition-colors ${activeButton === 'categories' ? 'text-[#336699]' : 'text-white'}`}
            >
              Categories
            </button>
          </div>

          {/* Underline Indicator */}
          <div className="w-full h-1 bg-white rounded-full mb-5 flex overflow-hidden">
            <div 
              className={`h-full bg-[#336699] transition-all duration-300 ${activeButton === 'main' ? 'w-1/2' : 'w-1/2 ml-auto'}`}
            ></div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 text-white overflow-y-auto">
            <ul className="flex flex-col gap-0">
              <li className="py-3 border-b border-gray-600">
                <Link href="/" className="text-white">Home</Link>
              </li>

              {/* Shop */}
              <li className="py-3 border-b border-gray-600">
                <button 
                  onClick={() => toggleMenu('shop')} 
                  className="w-full flex items-center justify-between text-white hover:text-[#336699] transition-colors"
                >
                  <span>Shop</span>
                  <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has('shop') ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenus.has('shop') && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Shop Page</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Shop Layouts</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Products Pages</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Products Layouts</Link></li>
                  </ul>
                )}
              </li>

              {/* Vendor */}
              <li className="py-3 border-b border-gray-600">
                <button 
                  onClick={() => toggleMenu('vendor')} 
                  className="w-full flex items-center justify-between text-white hover:text-[#336699] transition-colors"
                >
                  <span>Vendor</span>
                  <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has('vendor') ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenus.has('vendor') && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Store Listing</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Vendor Store</Link></li>
                  </ul>
                )}
              </li>

              {/* Blog */}
              <li className="py-3 border-b border-gray-600">
                <button 
                  onClick={() => toggleMenu('blog')} 
                  className="w-full flex items-center justify-between text-white hover:text-[#336699] transition-colors"
                >
                  <span>Blog</span>
                  <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has('blog') ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenus.has('blog') && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Classic</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Listing</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Grid</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Masonry</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Mask</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Single Post</Link></li>
                  </ul>
                )}
              </li>

              {/* Pages */}
              <li className="py-3 border-b border-gray-600">
                <button 
                  onClick={() => toggleMenu('pages')} 
                  className="w-full flex items-center justify-between text-white hover:text-[#336699] transition-colors"
                >
                  <span>Pages</span>
                  <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has('pages') ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenus.has('pages') && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">About Us</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Become a Vendor</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Contact Us</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Login</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">FAQs</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Error 404</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Coming Soon</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Wishlist</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Cart</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Checkout</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">My Account</Link></li>
                  </ul>
                )}
              </li>

              {/* Elements */}
              <li className="py-3 border-b border-gray-600">
                <button 
                  onClick={() => toggleMenu('elements')} 
                  className="w-full flex items-center justify-between text-white hover:text-[#336699] transition-colors"
                >
                  <span>Elements</span>
                  <MdKeyboardArrowDown className={`transition-transform ${expandedMenus.has('elements') ? 'rotate-180' : ''}`} />
                </button>
                {expandedMenus.has('elements') && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Products</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Typography</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Products Category</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Button</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Accordions</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Alert & Notification</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Tabs</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Testimony</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Blog Post</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Instagrams</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Call To Action</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Vendors</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Icon Boxes</Link></li>
                    <li><Link href="#" className="text-gray-300 hover:text-[#336699]">Icon</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>

        </div>


      </div>
      }
      {/* mobail manuber */}


      {/* Icon manuber */}


      {/* Logo */}
      <div className=" w-[144px] h-[45px] ">
        <Image src={Logo} alt="Logo" className="w-full h-full"/>
      </div>
      {/* Logo */}


      {/* cart */}
      <div className="CartIcon text-[26px] ">
        <IoBagHandleOutline />
      </div>
      {/* cart */}



    </div>
    {/* Main Nabver */}
    </>

  );
};

export default page;
