import React from 'react';
import { FaStar } from 'react-icons/fa';

const HomeComponent4 = () => {
  const products = [
    {
      id: 1,
      name: 'Men\'s Clothing',
      price: '$29.99',
      originalPrice: '$25.68',
      rating: 4.5,
      reviews: 9,
      image: null,
    },
    {
      id: 2,
      name: 'Women\'s Fashion Handbag',
      price: '$25.68',
      originalPrice: '$25.68',
      rating: 4.5,
      reviews: 3,
      image: null,
    },
    {
      id: 3,
      name: 'Black Winter Skating',
      price: '$40.66',
      originalPrice: '$45.00',
      rating: 4.5,
      reviews: 3,
      image: null,
    },
    {
      id: 4,
      name: 'Sport Women\'s Wear',
      price: '$220.20',
      originalPrice: '$30.00',
      rating: 4.5,
      reviews: 3,
      image: null,
    },
    {
      id: 5,
      name: 'Best Travel Bag',
      price: '$25.68',
      originalPrice: '$28.99',
      rating: 4.5,
      reviews: 5,
      image: null,
    },
    {
      id: 6,
      name: 'Gray Leather Shoes',
      price: '$26.88',
      originalPrice: '$27.88',
      rating: 4.5,
      reviews: 2,
      image: null,
    },
    {
      id: 7,
      name: 'Men\'s Black Wrist Watch',
      price: '$135.60',
      originalPrice: '$155.70',
      rating: 4.5,
      reviews: 3,
      image: null,
    },
    {
      id: 8,
      name: 'Women\'s Hiking Hat',
      price: '$53.00',
      originalPrice: null,
      rating: 4.5,
      reviews: 3,
      image: null,
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              size={14}
              color={i < Math.floor(rating) ? '#FFA500' : '#E5E7EB'}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 container">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Clothing & Apparel
          </h2>
        </div>
        <button className="text-base md:text-lg font-semibold text-gray-800 hover:text-black transition">
          More Products →
        </button>
      </div>

      {/* Left Side - Sidebar */}
      <div className="flex gap-8">
        {/* Sidebar Content */}
        <div className="hidden lg:block w-48 shrink-0">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-black mb-4">Weekend Sale</h3>
            <h4 className="text-xl font-bold text-black mb-1">NEW ARRIVALS</h4>
            <p className="text-gray-600 text-sm mb-6">Collection</p>
            <button className="w-full border-2 border-black text-black py-2 px-4 font-semibold hover:bg-black hover:text-white transition">
              SHOP NOW
            </button>
            
            {/* Placeholder for sidebar images */}
            <div className="mt-8 space-y-4">
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
              </div>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
              </div>
              <div className="w-full h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Product Image Placeholder */}
                <div className="w-full aspect-square bg-gray-100 flex items-center justify-center mb-4">
                  <span className="text-gray-400 text-sm">Image</span>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-sm font-semibold text-black mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-black">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent4;
