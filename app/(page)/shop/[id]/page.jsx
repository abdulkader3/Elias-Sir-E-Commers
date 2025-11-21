import React from 'react';
import { Suspense } from 'react';
import ProductDetailContent from '../../../Components/Shop/ProductDetailContent.jsx';

const ProductDetailPage = async ({ params }) => {
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
