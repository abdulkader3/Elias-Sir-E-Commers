'use client'
import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { ApiDataForDummyJson } from '../../Service/Api/dummyJsonApi';

const HomeComponent4 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ApiDataForDummyJson.getProducts(8);
        const formattedProducts = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: `$${product.price.toFixed(2)}`,
          originalPrice: product.discountPercentage 
            ? `$${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}`
            : null,
          rating: product.rating,
          reviews: product.reviews?.length || Math.floor(Math.random() * 10) + 1,
          image: product.thumbnail,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="w-full h-20 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-400 text-sm">Image</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {loading ? (
            <div className="text-center py-8">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {/* Product Image Placeholder */}
                  <div className="w-full aspect-square bg-gray-100 flex items-center justify-center mb-4 overflow-hidden">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-gray-400 text-sm">Image</span>
                    )}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent4;
