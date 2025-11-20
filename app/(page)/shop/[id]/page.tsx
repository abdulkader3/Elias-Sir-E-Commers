// Server-Side Rendering (SSR)


import React from 'react';
import { Suspense } from 'react';
import ProductDetailContent from '../../../Components/Shop/ProductDetailContent';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="p-8 text-center">Loading product...</div>}>
        <ProductDetailContent productId={id} />
      </Suspense>
    </div>
  );
};

export default ProductDetailPage;
