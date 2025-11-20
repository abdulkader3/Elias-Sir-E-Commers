// Server-Side Rendering (SSR)
// This page fetches products from dummyJson API on the server side
// It displays a grid of products with filtering options
// Products are clickable to view detailed information

import React, { Suspense } from 'react';
import ShopContent from '../../Components/Shop/ShopContent';

const ShopPage = async () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="p-8 text-center">Loading products...</div>}>
        <ShopContent />
      </Suspense>
    </div>
  );
};

export default ShopPage;

