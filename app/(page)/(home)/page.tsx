"use client";
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import LeftPhotosForSlid from '../../../public/photos/shoes.png'
import LeftPhotosForSlid2 from '../../../public/photos/skate.png'
import { GoArrowRight } from 'react-icons/go'


const page = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: LeftPhotosForSlid,
      title: 'Custom',
      highlight: 'Men\'s',
      heading: 'RUNNING SHOES',
      discount: '30% OFF'
    },
    {
      image: LeftPhotosForSlid2,
      title: 'Top weekly Seller',
      subtitle: 'Trending Collection',
      heading: 'Roller-skate',
      discount: '30% OFF'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }
  
  return (
    <>
    <div className="w-full h-screen">
      {/* for slider */}
      
      <div className="relative w-full h-[1040px] overflow-hidden">
        {/* Slider Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {/* Slide 1 - Running Shoes */}
          <div key={`slide-1-${currentSlide}`} className="w-full h-[520px] BackGroundImage flex justify-center items-center gap-10 shrink-0">

              <div className="LeftPhoto w-[474px] h-[397px] ">
                  <Image src={LeftPhotosForSlid} alt='Slid Image' className='w-full h-full'/>
              </div>

              <div className="RightText flex flex-col items-end text-[40px] font-normal text-[#666] ">

                <p className="animate-slide-text-1">  <span> Custom </span>  <span className=' border-[#f77c29] border-b-2 '> Men's </span>  </p>

                <p className='font-bold text-black text-[50px] animate-slide-text-2'> RUNNING SHOES </p>

                <p className='text-2xl text-[#668] mb-8 animate-slide-text-3'>  <span> Sale up to </span>   <span className='text-[#f77c29] '> 30% OFF </span>  </p>

                <button className='flex items-center gap-5 border border-[#333] px-[34px] py-[17px]  rounded-[3px] text-black text-sm animate-slide-text-4'> SHOP NOW  <GoArrowRight />  </button>

              </div>

          </div>

          {/* Slide 2 - Roller Skate */}
          <div key={`slide-2-${currentSlide}`} className="w-full h-[520px] BackGroundImage2 flex justify-center items-center gap-10 shrink-0">

              <div className="LeftPhoto w-[310px] h-[444px] ">
                  <Image src={LeftPhotosForSlid2} alt='Slid Image' className='w-full h-full'/>
              </div>

              <div className="RightText flex flex-col items-end text-[40px] font-normal text-[#666] ">

                <p className="animate-slide-text-1">  Top weekly Seller  </p>

                <p className="animate-slide-text-2">Trending Collection</p>

                <p className='font-bold text-black text-[50px] border-b-[3px] border-b-[#f77c29] mb-8 animate-slide-text-3'> <span className='Roller px-10 bg-[#f77c29] text-white '>Roller</span> -skate </p>

                <p className='text-2xl text-[#668] mb-8 animate-slide-text-3'>  <span> Sale up to </span>   <span className='text-[#f77c29] '> 30% OFF </span>  </p>

                <button className='flex items-center gap-5 border border-[#333] px-[34px] py-[17px]  rounded-[3px] text-black text-sm animate-slide-text-4'> SHOP NOW  <GoArrowRight />  </button>

              </div>

          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className='absolute left-5 top-60 transform -translate-y-1/2 bg-[#00000068] hover:bg-black/70 text-4xl text-white px-7 py-4 rounded-full z-10 transition-all'
        >
          ❮
        </button>

        <button 
          onClick={nextSlide}
          className='absolute right-5 top-60 transform -translate-y-1/2 bg-[#00000068] text-4xl hover:bg-black/70 text-white px-7 py-4 rounded-full z-10 transition-all'
        >
          ❯
        </button>

        {/* Slide Indicators */}
        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#f77c29] w-8' : 'bg-white/50 w-3'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
      
    </>
  )
}

export default page
