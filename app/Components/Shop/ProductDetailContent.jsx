// Server-Side Rendering (SSR)
// This component fetches product details from dummyJson API based on product ID
// It displays full product information with multiple images and detailed specs

import React from 'react';
import ProductDetailClient from './ProductDetailClient.jsx';
import { ApiDataForDummyJson } from '@/app/Service/Api/dummyJsonApi.js';

async function fetchProductDetails(productId) {
  try {
    const product = await ApiDataForDummyJson.getProductById(productId);
    return product;
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null;
  }
}

const ProductDetailContent = async ({
  productId,
}) => {
  const product = await fetchProductDetails(productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600">
          The product you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailContent;
