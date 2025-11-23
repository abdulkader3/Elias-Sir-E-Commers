// Client-Side Rendering (CSR)
// This component handles the interactive shop UI with filtering, search, and add to cart
// It receives initial products from the server and manages filtering on the client
// Fully responsive for mobile, tablet, and desktop devices

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext.jsx';
import { FaStar, FaShoppingCart, FaTimes, FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';

const   ShopClientComponent = ({
  initialProducts,
  categories,
}) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = initialProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesCategory && matchesSearch && matchesPrice;
    });

    // Sort products
    if (sortBy === 'name') {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [selectedCategory, searchTerm, priceRange, sortBy, initialProducts]);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    });
    toast.success(`${product.title} added to cart!`, {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const maxPrice = Math.max(...initialProducts.map((p) => p.price));

  // Sidebar filters component - reusable for both desktop and mobile
  const FiltersSidebar = ({ className = '' }) => (
    <div className={className}>
      <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Search */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Search
          </h3>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
          />
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Categories
          </h3>
          <div className="space-y-1 sm:space-y-2">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setShowMobileFilters(false);
              }}
              className={`w-full text-left px-3 py-2 rounded text-sm sm:text-base transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowMobileFilters(false);
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm sm:text-base transition-colors capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
            Price Range
          </h3>
          <div className="space-y-2 sm:space-y-3">
            <input
              type="range"
              min="0"
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <div className="text-xs sm:text-sm text-gray-600">
              ${priceRange[0]} - ${priceRange[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-100 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Shop</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Browse our collection of {filteredProducts.length} products
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Desktop Sidebar Filters - Hidden on mobile/tablet */}
          <div className="hidden lg:block">
            <FiltersSidebar />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar - Mobile Filter Toggle + Sort */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
              <p className="text-sm sm:text-base text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <FaBars className="text-sm" />
                  Filters
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base flex-1 sm:flex-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {/* Mobile/Tablet Filter Panel */}
            {showMobileFilters && (
              <div className="lg:hidden fixed inset-0 z-40">
                <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowMobileFilters(false)} />
                <div className="relative z-50 bg-white w-full h-full flex flex-col overflow-hidden">
                  <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
                    <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    <button
                      onClick={() => setShowMobileFilters(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FaTimes className="text-lg" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 space-y-4 sm:space-y-6">
                      {/* Search */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          Search
                        </h3>
                        <input
                          type="text"
                          placeholder="Search products..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
                        />
                      </div>

                      {/* Categories */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          Categories
                        </h3>
                        <div className="space-y-1 sm:space-y-2">
                          <button
                            onClick={() => {
                              setSelectedCategory('all');
                              setShowMobileFilters(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded text-sm sm:text-base transition-colors ${
                              selectedCategory === 'all'
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-gray-100 text-gray-700'
                            }`}
                          >
                            All Products
                          </button>
                          {categories.map((category) => (
                            <button
                              key={category}
                              onClick={() => {
                                setSelectedCategory(category);
                                setShowMobileFilters(false);
                              }}
                              className={`w-full text-left px-3 py-2 rounded text-sm sm:text-base transition-colors capitalize ${
                                selectedCategory === category
                                  ? 'bg-blue-600 text-white'
                                  : 'hover:bg-gray-100 text-gray-700'
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Range */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          Price Range
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          <input
                            type="range"
                            min="0"
                            max={maxPrice}
                            value={priceRange[1]}
                            onChange={(e) =>
                              setPriceRange([priceRange[0], Number(e.target.value)])
                            }
                            className="w-full"
                          />
                          <div className="text-xs sm:text-sm text-gray-600">
                            ${priceRange[0]} - ${priceRange[1]}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.id}`}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative bg-gray-100 aspect-square overflow-hidden group">
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">
                          {product.discount}% OFF
                        </div>
                      )}
                    </div>

                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 line-clamp-2 h-10 sm:h-14">
                        {product.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-xs sm:text-sm ${
                                i < Math.round(product.rating)
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <p className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                        ${product.price.toFixed(2)}
                      </p>

                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => handleAddToCart(product, e)}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                      >
                        <FaShoppingCart className="text-xs sm:text-sm" />
                        Add to Cart
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-base sm:text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopClientComponent;
