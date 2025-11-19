import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const HomeComponent3 = () => {
    const [activeTab, setActiveTab] = useState('NEW ARRIVALS')

    const tabs = ['NEW ARRIVALS', 'BEST SELLER', 'MOST POPULAR', 'FEATURED']

    const products = [
        {
            id: 1,
            name: 'Classic Hat',
            price: '$53.00',
            rating: 4,
            reviews: 11,
            image: null,
            discount: null
        },
        {
            id: 2,
            name: "Women's White Handbag",
            price: '$26.02',
            rating: 5,
            reviews: 13,
            image: null,
            discount: null
        },
        {
            id: 3,
            name: 'Multi Functional Apple iPhone',
            price: '$136.26',
            originalPrice: '$145.00',
            rating: 5,
            reviews: 5,
            image: null,
            discount: '7% OFF'
        },
        {
            id: 4,
            name: 'Fashion Blue Towel',
            price: '$26.55 - $29.99',
            rating: 5,
            reviews: 18,
            image: null,
            discount: null
        },
        {
            id: 5,
            name: 'Apple Super Notecom',
            price: '$243.30',
            originalPrice: '$253.60',
            rating: 5,
            reviews: 8,
            image: null,
            discount: '4% OFF'
        },
        {
            id: 6,
            name: "Women's Comforter",
            price: '$32.00 - $33.28',
            rating: 5,
            reviews: 18,
            image: null,
            discount: null
        },
        {
            id: 7,
            name: 'Multi-colorful Music',
            price: '$260.99 - $287.83',
            rating: 5,
            reviews: 5,
            image: null,
            discount: null
        },
        {
            id: 8,
            name: 'Comfortable Backpack',
            price: '$45.90',
            rating: 5,
            reviews: 6,
            image: null,
            discount: null
        },
        {
            id: 9,
            name: 'Data Transformer Tool',
            price: '$64.47',
            rating: 5,
            reviews: 1,
            image: null,
            discount: null
        },
        {
            id: 10,
            name: "Women's hairlye",
            price: '$173.84',
            rating: 5,
            reviews: 9,
            image: null,
            discount: null
        }
    ]

    const banners = [
        {
            id: 1,
            title: 'Cosmetic Makeup Professional',
            subtitle: 'NATURAL PROCESS',
            image: null
        },
        {
            id: 2,
            title: "Women's Lifestyle Collection",
            subtitle: 'TRENDING NOW',
            image: null
        }
    ]

    const renderStars = (rating) => {
        return (
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={i < rating ? 'text-orange-400' : 'text-gray-300'}
                        size={12}
                    />
                ))}
            </div>
        )
    }

    return (
        <section className="w-full py-16 bg-white">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Departments</h2>

                    {/* Tabs */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 font-semibold text-sm transition-all ${
                                    activeTab === tab
                                        ? 'border-2 border-blue-600 text-blue-600 bg-white'
                                        : 'border-2 border-gray-300 text-gray-700 bg-white hover:border-blue-600 hover:text-blue-600'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {products.map((product) => (
                        <div key={product.id} className="flex flex-col items-center text-center">
                            {/* Product Image Container */}
                            <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-gray-400 text-sm">Image</div>
                                )}

                                {/* Discount Badge */}
                                {product.discount && (
                                    <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-xs font-bold rounded">
                                        {product.discount}
                                    </div>
                                )}
                            </div>

                            {/* Product Name */}
                            <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="flex justify-center mb-2">
                                {renderStars(product.rating)}
                            </div>

                            {/* Reviews Count */}
                            <p className="text-gray-600 text-xs mb-2">({product.reviews} reviews)</p>

                            {/* Price */}
                            <p className="text-gray-900 font-bold">
                                {product.price}
                                {product.originalPrice && (
                                    <span className="text-gray-400 line-through ml-2 text-sm">
                                        {product.originalPrice}
                                    </span>
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Banners */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {banners.map((banner) => (
                        <div
                            key={banner.id}
                            className="relative bg-gray-300 rounded-lg overflow-hidden h-64 lg:h-80 flex items-end"
                        >
                            {/* Banner Image/Background */}
                            {banner.image ? (
                                <img
                                    src={banner.image}
                                    alt={banner.title}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                            ) : (
                                <div className="w-full h-full bg-linear-to-b from-gray-400 to-gray-500 absolute inset-0"></div>
                            )}

                            {/* Content Overlay */}
                            <div className="relative z-10 p-6 lg:p-10 text-white w-full">
                                <p className="text-xs font-bold tracking-wider mb-2 opacity-90">
                                    {banner.subtitle}
                                </p>
                                <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
                                    {banner.title}
                                </h3>
                                <button className="text-sm font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                                    SHOP NOW <span className="text-xl">→</span>
                                </button>
                            </div>

                            {/* Dark Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-black/30 z-0"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeComponent3
