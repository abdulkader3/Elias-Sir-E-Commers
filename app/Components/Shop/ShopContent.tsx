// Server-Side Rendering (SSR)
// This component fetches all products from dummyJson API and displays them in a grid
// It includes filtering by category and search functionality

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShopClientComponent from './ShopClientComponent';
import { ApiDataForDummyJson } from '@/app/Service/Api/dummyJsonApi';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  rating: number;
  reviews: number;
  category: string;
  discount: number;
}

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
}

async function fetchProducts(): Promise<Product[]> {
  try {
    const data = await ApiDataForDummyJson.getProducts(100);
    
    return data.products.map((product: ApiProduct) => ({
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
