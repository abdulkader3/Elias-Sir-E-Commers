import Image from 'next/image'
import React from 'react'
import LeftPhotosForSlid from '../../../public/photos/shoes.png'
import LeftPhotosForSlid2 from '../../../public/photos/skate.png'
import { GoArrowRight } from 'react-icons/go'


const page = () => {
  
  return (
    <>


    <div className="w-full h-screen">


      {/* for slider */}
      
      <div className="w-full h-[520px] BackGroundImage flex justify-center items-center gap-10 ">

          <div className="LeftPhoto w-[474px] h-[397px] ">
              <Image src={LeftPhotosForSlid} alt='Slid Image' className='w-full h-full'/>
          </div>

          <div className="RightText flex flex-col items-end text-[40px] font-[400] text-[#666] ">

            <p>  <span> Custom </span>  <span className=' border-[#f77c29] border-b-[2px] '> Men’s </span>  </p>

            <p className='font-bold text-black text-[50px] '> RUNNING SHOES </p>

            <p className='text-2xl text-[#668] mb-[32px] '>  <span> Sale up to </span>   <span className='text-[#f77c29] '> 30% OFF </span>  </p>


            <button className='flex items-center gap-5 border border-[#333] px-[34px] py-[17px]  rounded-[3px] text-black text-sm '> SHOP NOW  <GoArrowRight />  </button>

          </div>

      </div>

      <div className="w-full h-[520px] BackGroundImage2 flex justify-center items-center gap-10 ">

          <div className="LeftPhoto w-[310px] h-[444px] ">
              <Image src={LeftPhotosForSlid2} alt='Slid Image' className='w-full h-full'/>
          </div>

          <div className="RightText flex flex-col items-end text-[40px] font-[400] text-[#666] ">

            <p className='text-[22px] '>  Top weekly Seller  </p>

            <p>Trending Collection</p>

            <p className='font-bold text-black text-[50px] border-b-[3px] border-b-[#f77c29] mb-[30px] '> <span className='Roller px-[40px] bg-[#f77c29] text-white '>Roller</span> -skate </p>

            <p className='text-2xl text-[#668] mb-[32px] '>  <span> Sale up to </span>   <span className='text-[#f77c29] '> 30% OFF </span>  </p>


            <button className='flex items-center gap-5 border border-[#333] px-[34px] py-[17px]  rounded-[3px] text-black text-sm '> SHOP NOW  <GoArrowRight />  </button>

          </div>

      </div>


      





    </div>
      
    </>
  )
}

export default page
