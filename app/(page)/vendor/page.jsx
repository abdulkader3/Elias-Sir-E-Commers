// Client-Side Rendering (CSR)
// This page displays information about vendors and how to become a vendor

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

const VendorPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Vendor application submitted! (No API connected)');
    setFormData({ businessName: '', email: '', phone: '', category: '' });
  };

  const benefits = [
    'Reach millions of potential customers',
    'Easy to use seller dashboard',
    'Competitive commission rates',
    'Marketing support and tools',
    'Fast and reliable payments',
    'Dedicated seller support team',
    'Real-time sales analytics',
    'Free training and resources',
  ];

  const topVendors = [
    { name: 'Tech World', category: 'Electronics', rating: 4.8 },
    { name: 'Fashion Hub', category: 'Clothing', rating: 4.9 },
    { name: 'Home & Garden Pro', category: 'Home', rating: 4.7 },
    { name: 'Sports Central', category: 'Sports', rating: 4.8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a Vendor
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful sellers and grow your business with us
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Selling Today
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Sell With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 flex items-start gap-4"
            >
              <FaCheckCircle className="text-green-500 text-xl shrink-0 mt-1" />
              <p className="text-gray-700 font-semibold">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Vendors */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Vendors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topVendors.map((vendor, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {vendor.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {vendor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{vendor.category}</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i < Math.floor(vendor.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-xs text-gray-600">{vendor.rating}</span>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                  Visit Store
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Apply to Become a Vendor
          </h2>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Name */}
              <div>
                <label
                  htmlFor="businessName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Your business name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Product Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion & Accessories</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports & Outdoors</option>
                  <option value="beauty">Beauty & Personal Care</option>
                  <option value="toys">Toys & Games</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* Info Text */}
          <p className="text-center text-gray-600 mt-6 text-sm">
            Our team will review your application and get back to you within 2-3 business days.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-700 mb-8">
            Contact our vendor support team for more information about selling with us.
          </p>
          <Link
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
