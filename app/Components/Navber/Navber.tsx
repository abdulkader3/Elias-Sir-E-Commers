'use client'
import Image from "next/image";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from '../../../public/photos/logo.png'
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";

const page = () => {

  const [mobailNavber, setMobailNavber] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

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

  return (
    <>
    <style>{styles}</style>

    {/* headers */}
      <div className="w-full h-[50px] bg-[#f5f6f8] text-[12px] flex justify-between items-center ">

        <p>welcome messge for leter</p>

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
        </div>



      </div>
    {/* headers */}

    {/* Main Nabver */}
    <div className="w-full py-[32px] flex items-center justify-between  ">

      {/* Icon manuber */}
      <div onClick={hendelNavberButton} className="manubarIcon ">
        <FaBars/>
      </div>

      {/* mobail manuber */}
      {
        mobailNavber && 
        <div className={`absolute left-0 top-0 w-full h-screen pr-6 bg-[#00000083] navbar-overlay ${isClosing ? 'hide' : ''}`}>

        <div onClick={hendelNavberButtonHide} className=" text-[35px] text-white absolute right-1 top-5">
          <RxCross2 />
        </div>

        <div className="w-full h-full bg-[#202020] p-5 ">

          <div className="w-full h-[40px] relative ">
            <input className=" p-5 w-full h-full border border-[#fff] bg-[#dadada] rounded-full outline-none focus:outline-none" type="search" placeholder="Search" />
            <div className=" absolute top-2 right-5 text-2xl "><IoIosSearch/></div>
          </div>

          <div className="w-full h-fit flex text-[20px] mt-5 text-white justify-between ">
            <button>Main Manu</button>
            <button>Categories</button>
          </div>

          <div className="w-full h-fit flex mt-4">
            <div className="w-[50%] h-[3px] bg-white rounded-full "></div>
            <div className="w-[50%] h-[3px] bg-white rounded-full "></div>
          </div>

          <div className="w-full h-full text-white ">

            <ul>


              <li> <Link href={"/"}> Home </Link> </li>

              <li>
                Shop

                <ul className=" hidden">
                    <li> <Link href={"#"}> Shop Page </Link> </li>
                    <li> <Link href={"#"}> Shop Layouts </Link> </li>
                    <li> <Link href={"#"}> Products Pages </Link> </li>
                    <li> <Link href={"#"}> Products Layouts </Link> </li>
                </ul>


              </li>

              <li>
                Vendor

                <ul className=" hidden">
                    <li> <Link href={"#"}> Store Listing </Link> </li>
                    <li> <Link href={"#"}> Vendor Store </Link> </li>
                </ul>


              </li>

              <li>
                Blog

                <ul className=" hidden">
                    <li> <Link href={"#"}> Clasic </Link> </li>
                    <li> <Link href={"#"}> Listing </Link> </li>
                    <li> <Link href={"#"}> Grid </Link> </li>
                    <li> <Link href={"#"}> Masonry </Link> </li>
                    <li> <Link href={"#"}> Mask </Link> </li>
                    <li> <Link href={"#"}> Single Post </Link> </li>
                </ul>


              </li>
              
              <li>
                Pages

                <ul className=" hidden">
                    <li> <Link href={"#"}> About Us </Link> </li>
                    <li> <Link href={"#"}> Become a Vendor </Link> </li>
                    <li> <Link href={"#"}> Contact Us </Link> </li>
                    <li> <Link href={"#"}> Ligin </Link> </li>
                    <li> <Link href={"#"}> FAQs </Link> </li>
                    <li> <Link href={"#"}> Error 404 </Link> </li>
                    <li> <Link href={"#"}> Coming soon </Link> </li>
                    <li> <Link href={"#"}> Wishlist </Link> </li>
                    <li> <Link href={"#"}> Cart </Link> </li>
                    <li> <Link href={"#"}> Checkout </Link> </li>
                    <li> <Link href={"#"}> My Accoutnt </Link> </li>
                </ul>


              </li>
              
              <li>
                Elements

                <ul className=" hidden">
                    <li> <Link href={"#"}> Products </Link> </li>
                    <li> <Link href={"#"}> Typography </Link> </li>
                    <li> <Link href={"#"}> Products Category </Link> </li>
                    <li> <Link href={"#"}> Button </Link> </li>
                    <li> <Link href={"#"}> Accordions </Link> </li>
                    <li> <Link href={"#"}> Alert & Notification </Link> </li>
                    <li> <Link href={"#"}> Tabs </Link> </li>
                    <li> <Link href={"#"}> Testimony  </Link> </li>
                    <li> <Link href={"#"}> Blog Post  </Link> </li>
                    <li> <Link href={"#"}> Instagrams  </Link> </li>
                    <li> <Link href={"#"}> Call To Action  </Link> </li>
                    <li> <Link href={"#"}> Vendors </Link> </li>
                    <li> <Link href={"#"}> Icon Boxes </Link> </li>
                    <li> <Link href={"#"}> Icon </Link> </li>
                </ul>


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
