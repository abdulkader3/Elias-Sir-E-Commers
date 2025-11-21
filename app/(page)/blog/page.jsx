// Server-Side Rendering (SSR)
// This page displays a collection of blog posts with search and category filtering

import React from 'react';
import BlogContent from '../../Components/Blog/BlogContent.jsx';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogContent />
    </div>
  );
};

export default BlogPage;
