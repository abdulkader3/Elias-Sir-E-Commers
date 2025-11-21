// Server-Side Rendering (SSR)
// This component fetches all products from dummyJson API and displays them in a grid
// It includes filtering by category and search functionality

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopClientComponent from './ShopClientComponent.jsx';
import { ApiDataForDummyJson } from '@/app/Service/Api/dummyJsonApi.js';

async function fetchProducts() {
  try {
    const data = await ApiDataForDummyJson.getProducts(100);
    
    return data.products.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
      images: product.images,
      rating: product.rating,
      reviews: product.reviewCount || 0,
      category: product.category,
      discount: product.discountPercentage || 0,
    }));
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

const ShopContent = async () => {
  const products = await fetchProducts();
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <ShopClientComponent 
      initialProducts={products}
      categories={categories}
    />
  );
};

export default ShopContent;
