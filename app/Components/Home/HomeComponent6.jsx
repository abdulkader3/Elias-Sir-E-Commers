import React from 'react';

const HomeComponent6 = () => {
  const clientLogos = [
    { id: 1, name: 'Sterling' },
    { id: 2, name: 'Neo' },
    { id: 3, name: 'Galaxy' },
    { id: 4, name: 'Skysuite' },
    { id: 5, name: 'Red' },
    { id: 6, name: 'Checkmark' },
    { id: 7, name: 'Green Grass' },
    { id: 8, name: 'Kinova' },
    { id: 9, name: 'Sofia' },
    { id: 10, name: 'Elegant Logo' },
    { id: 11, name: 'Node' },
    { id: 12, name: 'SkillStar' },
  ];

  const blogPosts = [
    {
      id: 1,
      image: null,
      author: 'John Doe',
      date: '03.05.2021',
      title: 'Aliquam tincidunt mauris erisus',
    },
    {
      id: 2,
      image: null,
      author: 'John Doe',
      date: '03.05.2021',
      title: 'Cras ornare tristique elit',
    },
    {
      id: 3,
      image: null,
      author: 'John Doe',
      date: '03.05.2021',
      title: 'Vivamus vestibulum nulla nec ante',
    },
    {
      id: 4,
      image: null,
      author: 'John Doe',
      date: '03.05.2021',
      title: 'Fusce lacinia arcuit nulla',
    },
  ];

  const recentViews = [
    { id: 1, image: null },
    { id: 2, image: null },
    { id: 3, image: null },
    { id: 4, image: null },
    { id: 5, image: null },
    { id: 6, image: null },
    { id: 7, image: null },
    { id: 8, image: null },
  ];

  return (
    <div className="w-full bg-white container">
      {/* Our Clients Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Clients</h2>
        
        {/* Clients Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="border border-gray-200 rounded-lg p-6 flex items-center justify-center min-h-24 bg-gray-50 hover:bg-gray-100 transition"
            >
              <span className="text-gray-400 text-sm font-semibold">Logo</span>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8"></div>

      {/* From Our Blog Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">From Our Blog</h2>
          <a href="#" className="text-gray-700 font-semibold hover:text-gray-900 transition">
            View All Articles
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex flex-col">
              {/* Blog Image */}
              <div className="w-full aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                <span className="text-sm">Image</span>
              </div>

              {/* Blog Content */}
              <div className="flex flex-col gap-2">
                <div className="text-xs text-gray-600">
                  <span className="font-semibold">by {post.author}</span>
                  <span className="mx-1">-</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>

                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition inline-flex items-center gap-1">
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8"></div>

      {/* Your Recent Views Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Recent Views</h2>

        {/* Recent Views Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {recentViews.map((item) => (
            <div
              key={item.id}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-200 transition"
            >
              <span className="text-xs">Image</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeComponent6;
