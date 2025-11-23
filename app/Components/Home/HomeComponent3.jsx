'use client'
import React, { useState, useEffect } from 'react'
import { FaStar, FaShoppingCart } from 'react-icons/fa'
import { ApiDataForDummyJson } from '../../Service/Api/dummyJsonApi'
import { useCart } from '../../context/CartContext.jsx'
import { toast } from 'react-toastify'

const HomeComponent3 = () => {
    const { addToCart } = useCart()
    const [activeTab, setActiveTab] = useState('NEW ARRIVALS')
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const tabs = ['NEW ARRIVALS', 'BEST SELLER', 'MOST POPULAR', 'FEATURED']

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ApiDataForDummyJson.getProducts(10)
                const formattedProducts = data.products.map((product) => ({
                    id: product.id,
                    name: product.title,
                    price: `$${product.price.toFixed(2)}`,
                    rating: Math.round(product.rating),
                    reviews: product.reviews?.length || Math.floor(Math.random() * 20) + 1,
                    image: product.thumbnail,
                    discount: product.discountPercentage ? `${Math.round(product.discountPercentage)}% OFF` : null,
                    originalPrice: product.discountPercentage 
                        ? `$${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}`
                        : null
                }))
                setProducts(formattedProducts)
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const banners = [
        {
            id: 1,
            title: 'Premium Collection',
            subtitle: 'FEATURED',
            image: products.length > 0 ? products[0]?.image : null
        },
        {
            id: 2,
            title: "Shop Best Sellers",
            subtitle: 'TRENDING NOW',
            image: products.length > 1 ? products[1]?.image : null
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

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            title: product.name,
            price: parseFloat(product.price.replace('$', '')),
            thumbnail: product.image,
            quantity: 1,
        })
        toast.success(`${product.name} added to cart!`, {
            position: 'bottom-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }

    return (
        <section className="w-full py-16 bg-white container">
            <div className="">
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
                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-gray-500">Loading products...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        {products.map((product) => (
                            <div key={product.id} className="flex flex-col items-center text-center">
                                {/* Product Image Container */}
                                <div className="w-full aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
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

                                    {/* Add to Cart Overlay */}
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                    >
                                        <div className="flex flex-col items-center gap-2">
                                            <FaShoppingCart className="text-white text-2xl" />
                                            <span className="text-white font-semibold">Add to Cart</span>
                                        </div>
                                    </button>
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
                )}

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
