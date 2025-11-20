// Client-Side Rendering (CSR)
// This component displays blog posts in a grid format with search and category filtering

'use client';

import React, { useState, useMemo } from 'react';
import { FaCalendar, FaUser, FaSearch } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
}

const BlogContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Top 5 Shopping Trends for 2025',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      category: 'trends',
      excerpt:
        'Discover the hottest shopping trends that are dominating the market this year. From sustainable fashion to smart home gadgets...',
      image: 'https://via.placeholder.com/400x250?text=Shopping+Trends',
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Product',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      category: 'guide',
      excerpt:
        'A comprehensive guide to selecting the right products for your needs. Learn about quality indicators and what to look for...',
      image: 'https://via.placeholder.com/400x250?text=Product+Guide',
    },
    {
      id: 3,
      title: 'Sustainable Shopping: Making a Difference',
      author: 'Emma Williams',
      date: 'January 10, 2025',
      category: 'sustainability',
      excerpt:
        'Learn how your shopping choices can help the environment. We explore eco-friendly products and sustainable brands...',
      image: 'https://via.placeholder.com/400x250?text=Sustainability',
    },
    {
      id: 4,
      title: 'Best Deals and Discounts This Season',
      author: 'John Smith',
      date: 'January 8, 2025',
      category: 'deals',
      excerpt:
        'Find the best deals and exclusive discounts on your favorite products. We share insider tips on when and where to shop...',
      image: 'https://via.placeholder.com/400x250?text=Deals+Discounts',
    },
    {
      id: 5,
      title: 'Customer Reviews: Real Experiences',
      author: 'Lisa Anderson',
      date: 'January 5, 2025',
      category: 'reviews',
      excerpt:
        'Read genuine reviews from our customers about their shopping experiences. Discover what others are saying about popular products...',
      image: 'https://via.placeholder.com/400x250?text=Customer+Reviews',
    },
    {
      id: 6,
      title: 'New Product Launches: What\'s Coming',
      author: 'David Martinez',
      date: 'January 1, 2025',
      category: 'news',
      excerpt:
        'Stay updated on exciting new product launches and innovations in the market. See what brands are bringing to the table...',
      image: 'https://via.placeholder.com/400x250?text=New+Launches',
    },
  ];

  const categories = ['all', 'trends', 'guide', 'sustainability', 'deals', 'reviews', 'news'];

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog</h1>
          <p className="text-gray-600">
            Stay informed with our latest articles and insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 space-y-6">
              {/* Search */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded capitalize transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {category === 'all' ? 'All Articles' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    {/* Post Image */}
                    <div className="relative h-48 bg-gray-200 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                        {post.category}
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-200 pt-4">
                        <div className="flex items-center gap-1">
                          <FaUser className="text-xs" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCalendar className="text-xs" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No articles found. Try adjusting your search or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
