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
    <div className="w-full h-auto md:h-screen">
      {/* for slider */}
      
      <div className="relative w-full h-auto md:h-[1040px] overflow-hidden">
        {/* Slider Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {/* Slide 1 - Running Shoes */}
          <div key={`slide-1-${currentSlide}`} className="w-full h-auto md:h-[520px] BackGroundImage flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 shrink-0 px-4 py-8 md:py-0 md:px-0">

              <div className="LeftPhoto w-full md:w-[474px] h-48 sm:h-64 md:h-[397px] shrink-0">
                  <Image src={LeftPhotosForSlid} alt='Slid Image' className='w-full h-full object-cover'/>
              </div>

              <div className="RightText flex flex-col items-center md:items-end text-base sm:text-2xl md:text-[40px] font-normal text-[#666] w-full md:w-auto">

                <p className="animate-slide-text-1 text-center md:text-right">  <span> Custom </span>  <span className='border-[#f77c29] border-b-2'> Men's </span>  </p>

                <p className='font-bold text-black text-2xl sm:text-4xl md:text-[50px] animate-slide-text-2 text-center md:text-right'> RUNNING SHOES </p>

                <p className='text-base sm:text-lg md:text-2xl text-[#668] mb-4 md:mb-8 animate-slide-text-3 text-center md:text-right'>  <span> Sale up to </span>   <span className='text-[#f77c29]'> 30% OFF </span>  </p>

                <button className='flex items-center gap-5 border border-[#333] px-6 sm:px-[34px] py-3 sm:py-[17px] rounded-[3px] text-black text-xs sm:text-sm animate-slide-text-4 hover:bg-[#f77c29] hover:text-white hover:border-[#f77c29] transition-all'> SHOP NOW  <GoArrowRight />  </button>

              </div>

          </div>

          {/* Slide 2 - Roller Skate */}
          <div key={`slide-2-${currentSlide}`} className="w-full h-auto md:h-[520px] BackGroundImage2 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 shrink-0 px-4 py-8 md:py-0 md:px-0">

              <div className="LeftPhoto w-full md:w-[310px] h-48 sm:h-64 md:h-[444px] shrink-0">
                  <Image src={LeftPhotosForSlid2} alt='Slid Image' className='w-full h-full object-cover'/>
              </div>

              <div className="RightText flex flex-col items-center md:items-end text-base sm:text-2xl md:text-[40px] font-normal text-[#666] w-full md:w-auto">

                <p className="animate-slide-text-1 text-center md:text-right text-sm sm:text-base">  Top weekly Seller  </p>

                <p className="animate-slide-text-2 text-center md:text-right text-sm sm:text-base">Trending Collection</p>

                <p className='font-bold text-black text-2xl sm:text-4xl md:text-[50px] border-b-[3px] border-b-[#f77c29] mb-4 md:mb-8 animate-slide-text-3 text-center md:text-right'> <span className='Roller px-4 sm:px-10 bg-[#f77c29] text-white inline-block'>Roller</span> <span className='block md:inline'>-skate</span> </p>

                <p className='text-base sm:text-lg md:text-2xl text-[#668] mb-4 md:mb-8 animate-slide-text-3 text-center md:text-right'>  <span> Sale up to </span>   <span className='text-[#f77c29]'> 30% OFF </span>  </p>

                <button className='flex items-center gap-5 border border-[#333] px-6 sm:px-[34px] py-3 sm:py-[17px] rounded-[3px] text-black text-xs sm:text-sm animate-slide-text-4 hover:bg-[#f77c29] hover:text-white hover:border-[#f77c29] transition-all'> SHOP NOW  <GoArrowRight />  </button>

              </div>

          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className='absolute left-2 sm:left-5 top-1/2 md:top-60 transform -translate-y-1/2 bg-[#00000068] hover:bg-black/70 text-2xl sm:text-4xl text-white px-3 sm:px-7 py-2 sm:py-4 rounded-full z-10 transition-all'
        >
          ❮
        </button>

        <button 
          onClick={nextSlide}
          className='absolute right-2 sm:right-5 top-1/2 md:top-60 transform -translate-y-1/2 bg-[#00000068] text-2xl sm:text-4xl hover:bg-black/70 text-white px-3 sm:px-7 py-2 sm:py-4 rounded-full z-10 transition-all'
        >
          ❯
        </button>

        {/* Slide Indicators */}
        <div className='absolute bottom-120 sm:bottom-120 left-1/2 transform -translate-x-1/2 flex gap-2 z-10'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#f77c29] w-6 sm:w-8' : 'bg-[#2d2d2dd6] w-2 sm:w-3'
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
