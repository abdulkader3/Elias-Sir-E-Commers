import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa";
import Logo from '../../../public/photos/logo.png'
import { IoBagHandleOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const page = () => {
  return (
    <>

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
      <div className="manubarIcon ">
        <FaBars/>
      </div>

      {/* mobail manuber */}
      <div className=" absolute left-0 top-0 w-full h-screen pr-6 bg-[#00000083] ">
        <div className=" text-[35px] text-white absolute right-1 top-5">
          <RxCross2 />
        </div>
        <div className="w-full h-full bg-[#202020] "></div>
      </div>
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
