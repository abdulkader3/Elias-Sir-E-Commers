// Client-Side Rendering (CSR)
// This page displays links to various utility and information pages

'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const PagesPage = () => {
  const pages = [
    { name: 'About Us', description: 'Learn more about our company', href: '#' },
    { name: 'Contact Us', description: 'Get in touch with our support team', href: '#' },
    { name: 'Terms & Conditions', description: 'Read our terms and conditions', href: '#' },
    { name: 'Privacy Policy', description: 'Learn about our privacy practices', href: '#' },
    { name: 'Shipping Info', description: 'Information about shipping and delivery', href: '#' },
    { name: 'Returns & Exchanges', description: 'Our return policy and process', href: '#' },
    { name: 'FAQ', description: 'Frequently asked questions', href: '#' },
    { name: 'Warranty', description: 'Product warranty information', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Pages & Information</h1>
          <p className="text-gray-600 text-lg">
            Find all the important pages and information you need
          </p>
        </div>

        {/* Pages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page, index) => (
            <Link
              key={index}
              href={page.href}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {page.name}
              </h3>
              <p className="text-gray-600 mb-4">{page.description}</p>
              <div className="flex items-center text-blue-600 group-hover:gap-2 transition-all">
                <span className="text-sm font-semibold">Read More</span>
                <FaArrowRight className="text-sm ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            If you can't find what you're looking for, please contact our support team. We're here to help!
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contact Support
            </Link>
            <Link
              href="/"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesPage;
