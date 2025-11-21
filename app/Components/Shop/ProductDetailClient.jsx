// Client-Side Rendering (CSR)
// This component displays product details on the client side
// It includes image gallery, quantity selector, and add to cart functionality

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext.jsx';
import { FaStar, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

const ProductDetailClient = ({
  product,
}) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(product.stock, value));
    setQuantity(newQuantity);
  };

  const displayImages = [product.thumbnail, ...product.images];
  const selectedImage = displayImages[selectedImageIndex];
  const discountedPrice =
    product.discountPercentage && product.discountPercentage > 0
      ? product.price * (1 - product.discountPercentage / 100)
      : product.price;

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link
          href="/shop"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <FaArrowLeft className="text-sm" />
          Back to Shop
        </Link>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <Image
                src={selectedImage}
                alt={product.title}
                fill
                className="object-contain p-4"
              />
              {product.discountPercentage && product.discountPercentage > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold">
                  -{product.discountPercentage}%
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {displayImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    index === selectedImageIndex
                      ? 'border-blue-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Product ${index}`}
                    fill
                    className="object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col gap-6">
            {/* Category */}
            <div>
              <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.title}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating}/5 ({product.reviewCount || 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-4">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {product.discountPercentage && product.discountPercentage > 0 && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>
              {product.discountPercentage && product.discountPercentage > 0 && (
                <p className="text-sm text-green-600 font-semibold">
                  Save ${(product.price - discountedPrice).toFixed(2)}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Stock Available</p>
                <p className="font-semibold text-gray-900">
                  {product.stock > 0 ? (
                    <span className="text-green-600">{product.stock} items</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                </p>
              </div>
              {product.sku && (
                <div>
                  <p className="text-sm text-gray-600">SKU</p>
                  <p className="font-semibold text-gray-900">{product.sku}</p>
                </div>
              )}
              {product.brand && (
                <div>
                  <p className="text-sm text-gray-600">Brand</p>
                  <p className="font-semibold text-gray-900 capitalize">
                    {product.brand}
                  </p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold text-gray-900 capitalize">
                  {product.category}
                </p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  className="w-16 text-center border-none focus:outline-none font-semibold"
                  min="1"
                  max={product.stock}
                />
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-white ${
                  product.stock === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : addedToCart
                    ? 'bg-green-600'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                <FaShoppingCart />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-600">
                ✓ Free shipping on orders over $50
              </p>
              <p className="text-sm text-gray-600">
                ✓ 30-day money-back guarantee
              </p>
              <p className="text-sm text-gray-600">
                ✓ Secure checkout with encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
