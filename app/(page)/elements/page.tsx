// Client-Side Rendering (CSR)
// This page showcases UI components and design elements used throughout the site

'use client';

import React from 'react';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';

const ElementsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Design Elements</h1>
          <p className="text-gray-600 text-lg">
            Showcase of UI components and design elements
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Primary Buttons</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Primary Button
                </button>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <FaShoppingCart /> Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Secondary Buttons</h3>
              <div className="space-y-3">
                <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Secondary Button
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Outline Button
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div key={card} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-linear-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Card Title</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This is a sample card component showing basic structure and styling.
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Primary Blue', color: 'bg-blue-600' },
              { name: 'Secondary Gray', color: 'bg-gray-600' },
              { name: 'Success Green', color: 'bg-green-600' },
              { name: 'Warning Red', color: 'bg-red-600' },
            ].map((palette) => (
              <div key={palette.name} className="text-center">
                <div className={`${palette.color} rounded-lg h-24 mb-3`}></div>
                <p className="font-semibold text-gray-900">{palette.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Rating Component */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ratings</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 w-20">5 Stars</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 w-20">4 Stars</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 4 ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-gray-600 w-20">3 Stars</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 3 ? 'text-yellow-400' : 'text-gray-300'} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Form Elements</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6 max-w-md">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Text Input
                </label>
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Select
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-200"
                  />
                  <span className="text-sm text-gray-700">Remember me</span>
                </label>
              </div>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Badges & Labels</h2>
          <div className="flex flex-wrap gap-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              New
            </span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              Sale
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
              Popular
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
              Trending
            </span>
          </div>
        </section>

        {/* Info Boxes */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Alert Boxes</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800">
              <p className="font-semibold mb-1">Info Message</p>
              <p>This is an informational alert box with helpful information.</p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
              <p className="font-semibold mb-1">Success Message</p>
              <p>Operation completed successfully!</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800">
              <p className="font-semibold mb-1">Warning Message</p>
              <p>Please review before proceeding.</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
              <p className="font-semibold mb-1">Error Message</p>
              <p>An error occurred while processing your request.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ElementsPage;
