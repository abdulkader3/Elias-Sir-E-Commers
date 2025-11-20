// Server-Side Rendering (SSR)
// This component fetches product details from dummyJson API based on product ID
// It displays full product information with multiple images and detailed specs

import React from 'react';
import ProductDetailClient from './ProductDetailClient';
import { ApiDataForDummyJson } from '@/app/Service/Api/dummyJsonApi';

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  rating: number;
  reviewCount?: number;
  category: string;
  discountPercentage?: number;
  description: string;
  stock: number;
  brand?: string;
  sku?: string;
}

interface Product extends ApiProduct {}

async function fetchProductDetails(productId: string): Promise<Product | null> {
  try {
    const product = await ApiDataForDummyJson.getProductById(productId);
    return product;
  } catch (error) {
    console.error('Failed to fetch product details:', error);
    return null;
  }
}

interface ProductDetailContentProps {
  productId: string;
}

const ProductDetailContent = async ({
  productId,
}: ProductDetailContentProps) => {
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
