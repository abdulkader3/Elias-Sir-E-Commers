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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
                  required
                  placeholder="Enter your business name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="business@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports</option>
                  <option value="books">Books</option>
                  <option value="beauty">Beauty & Personal Care</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center gap-2"
              >
                Submit Application
                <FaArrowRight />
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Our team will review your application and contact you within 2-3 business days
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How much does it cost to sell?</h3>
              <p className="text-gray-600">
                We charge a competitive commission rate that varies by category. There are no hidden fees or setup costs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How long does approval take?</h3>
              <p className="text-gray-600">
                Most applications are reviewed within 2-3 business days. You'll receive an email notification.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">What products can I sell?</h3>
              <p className="text-gray-600">
                You can sell almost any product, but some restricted items may require additional verification.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">How do I get paid?</h3>
              <p className="text-gray-600">
                We process payments weekly via bank transfer or your preferred payment method.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join our community of successful vendors today
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorPage;
