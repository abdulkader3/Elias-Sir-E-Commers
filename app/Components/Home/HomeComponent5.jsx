import React from 'react';

const HomeComponent5 = () => {
  return (
    <div className="w-full bg-gray-700 py-8 md:py-12x container">
      <div className="flex items-center justify-between gap-6 md:gap-12">
        {/* Left Side - Discount Section */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Discount Badge */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-5xl font-bold text-orange-500">
              25%
            </span>
            <span className="text-lg md:text-xl font-bold text-orange-500">
              OFF
            </span>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg md:text-2xl font-bold text-white">
              FOR TODAY'S FASHION
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Use code <span className="font-bold text-white">Black1234</span> to get best offer.
            </p>
          </div>
        </div>

        {/* Middle - Image Placeholder */}
        <div className="hidden md:flex flex-1 min-h-32 bg-gray-600 rounded items-center justify-center text-gray-400">
          <span>Image placeholder</span>
        </div>

        {/* Right Side - Shop Now Button */}
        <div className="shrink-0">
          <button className="border-2 border-white text-white px-6 md:px-8 py-2 md:py-3 font-semibold text-sm md:text-base hover:bg-white hover:text-gray-700 transition duration-300">
            SHOP NOW →
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent5;
