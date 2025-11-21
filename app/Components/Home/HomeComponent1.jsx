'use client'
import React, { useState, useEffect } from 'react'
import { ApiDataForDummyJson } from '../../Service/Api/dummyJsonApi'
import { FaMoneyBillWheat, FaTruckFast } from 'react-icons/fa6'
import { FaShieldAlt } from 'react-icons/fa'
import { PiChatsBold } from 'react-icons/pi'

const HomeComponent1 = () => {
    const [featuredProduct, setFeaturedProduct] = useState(null)
    const [bestSellers, setBestSellers] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedSize, setSelectedSize] = useState('Medium')
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ApiDataForDummyJson.getProducts(20)
                if (data.products.length > 0) {
                    setFeaturedProduct({
                        id: data.products[0].id,
                        name: data.products[0].title,
                        price: `$${data.products[0].price.toFixed(2)}`,
                        originalPrice: data.products[0].discountPercentage 
                            ? `$${(data.products[0].price / (1 - data.products[0].discountPercentage / 100)).toFixed(2)}`
                            : null,
                        rating: data.products[0].rating,
                        reviews: data.products[0].reviews?.length || 3,
                        image: data.products[0].thumbnail,
                        discount: data.products[0].discountPercentage ? `${Math.round(data.products[0].discountPercentage)}% OFF` : '25% OFF',
                        images: data.products[0].images || [data.products[0].thumbnail],
                        description: data.products[0].description
                    })
                    setBestSellers(data.products.slice(1, 4).map(product => ({
                        id: product.id,
                        name: product.title,
                        price: `$${product.price.toFixed(2)}`,
                        originalPrice: product.discountPercentage 
                            ? `$${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}`
                            : null,
                        rating: product.rating,
                        image: product.thumbnail
                    })))
                }
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <span key={i} className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}>★</span>
        ))
    }

    return (
        <div className="w-full overflow-x-hidden container">
            {/* Top Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12 py-8 bg-white w-full">
                {/* Free Shipping */}
                <div className="flex items-center gap-4">
                    <div className="w-16 text-[39px] h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                        <FaTruckFast />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Free Shipping & Returns</h3>
                        <p className="text-xs text-gray-600">For all orders over $50</p>
                    </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-center gap-4">
                    <div className="w-16 text-[39px] h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                       < FaShieldAlt/> 
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Secure Payment</h3>
                        <p className="text-xs text-gray-600">We ensure secure payment</p>
                    </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 text-[39px] bg-gray-100 rounded flex items-center justify-center shrink-0">
                        <FaMoneyBillWheat />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Money Back Guarantee</h3>
                        <p className="text-xs text-gray-600">Any back within 30 days</p>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 text-[39px] rounded flex items-center justify-center shrink-0">
                        {<PiChatsBold />}
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Customer Support</h3>
                        <p className="text-xs text-gray-600">Call or email us 24/7</p>
                    </div>
                </div>
            </div>

            {/* Main Banner Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-8 w-full">
                {/* Sports Outfits Banner */}
                <div className="bg-gray-100 rounded-lg p-8 flex items-end justify-between min-h-72">
                    <div className="flex-1">
                        <p className="text-orange-500 font-semibold text-sm mb-2">Get up to <span className="text-lg">20% OFF</span></p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">SPORTS OUTFITS</h2>
                        <p className="text-gray-600 text-sm">Collection</p>
                        <p className="text-gray-600 text-xs mt-4">Starting at <span className="font-semibold">$170.00</span></p>
                    </div>
                    <div className="w-40 h-40 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                        {bestSellers.length > 0 && bestSellers[0].image ? (
                            <img src={bestSellers[0].image} alt="Sports Outfits" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-sm">Image</span>
                        )}
                    </div>
                </div>

                {/* Accessories Banner */}
                <div className="bg-gray-900 text-white rounded-lg p-8 flex items-end justify-between min-h-72">
                    <div className="flex-1">
                        <p className="text-gray-400 text-sm mb-2">New Arrivals</p>
                        <h2 className="text-3xl font-bold mb-2">ACCESSORIES</h2>
                        <p className="text-gray-300 text-sm">Collection</p>
                        <p className="text-gray-400 text-xs mt-4">Only From <span className="font-semibold text-orange-500">$30.00</span></p>
                    </div>
                    <div className="w-40 h-40 bg-gray-700 rounded flex items-center justify-center overflow-hidden">
                        {bestSellers.length > 1 && bestSellers[1].image ? (
                            <img src={bestSellers[1].image} alt="Accessories" className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-gray-400 text-sm">Image</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            {loading ? (
                <div className="px-6 md:px-12 py-8 text-center">
                    <p className="text-gray-500">Loading products...</p>
                </div>
            ) : (
                <div className="px-6 md:px-12 py-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
                        {/* Deals Hot of The Day */}
                        <div className="md:col-span-7">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Deals Hot of The Day</h3>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600">‹</button>
                                    <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600">›</button>
                                </div>
                            </div>

                            {featuredProduct && (
                                <div className="bg-white rounded-lg border border-gray-200 p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Product Images Sidebar */}
                                        <div className="flex flex-col gap-3">
                                            {featuredProduct.images.slice(0, 4).map((img, idx) => (
                                                <div key={idx} className={`w-24 h-24 rounded flex items-center justify-center overflow-hidden ${idx === 0 ? 'border-2 border-gray-400' : 'border'}`}>
                                                    {img ? (
                                                        <img src={img} alt={`Product ${idx}`} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-gray-400 text-xs">Image</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Main Product Image and Details */}
                                        <div>
                                            <div className="relative mb-6">
                                                <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden" style={{ aspectRatio: '1' }}>
                                                    {featuredProduct.image ? (
                                                        <img src={featuredProduct.image} alt={featuredProduct.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <span className="text-gray-400">Product Image</span>
                                                    )}
                                                </div>
                                                {featuredProduct.discount && (
                                                    <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">{featuredProduct.discount}</span>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-bold text-gray-900 mb-4">{featuredProduct.name}</h4>

                                            <div className="mb-4">
                                                <div className="flex items-baseline gap-2 mb-2">
                                                    <span className="text-xl font-bold text-gray-900">{featuredProduct.price}</span>
                                                    {featuredProduct.originalPrice && (
                                                        <>
                                                            <span className="text-gray-600">–</span>
                                                            <span className="text-xl font-bold text-gray-900">{featuredProduct.originalPrice}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600">Offer Ends in: <span className="font-semibold text-gray-900">0 days, 00 : 00 : 00</span></p>
                                            </div>

                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex gap-1">
                                                    {renderStars(featuredProduct.rating)}
                                                </div>
                                                <span className="text-sm text-gray-600">({featuredProduct.reviews} Reviews)</span>
                                            </div>

                                            <div className="mb-6">
                                                <p className="text-sm font-semibold text-gray-900 mb-2">Size:</p>
                                                <div className="flex gap-3">
                                                    {['Extra Large', 'Large', 'Medium', 'Small'].map((size) => (
                                                        <button
                                                            key={size}
                                                            onClick={() => setSelectedSize(size)}
                                                            className={`px-4 py-2 rounded text-sm transition ${selectedSize === size ? 'bg-orange-500 text-white border-orange-500' : 'border border-gray-300 text-gray-700 hover:border-gray-400'}`}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="flex items-center border border-gray-300 rounded">
                                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-gray-600">−</button>
                                                    <span className="w-10 text-center">{quantity}</span>
                                                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-gray-600">+</button>
                                                </div>
                                                <button className="flex-1 bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600">
                                                    ADD TO CART
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-4 text-gray-600">
                                                <button className="flex items-center gap-2 hover:text-gray-900">
                                                    <span>♡</span>
                                                </button>
                                                <button className="flex items-center gap-2 hover:text-gray-900">
                                                    <span>⊛</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Top 20 Best Seller */}
                        <div className="md:col-span-5">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">Top 20 Best Seller</h3>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600">‹</button>
                                    <button className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center text-gray-600">›</button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {bestSellers.map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
                                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center overflow-hidden">
                                            {product.image ? (
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-gray-400 text-xs">Image</span>
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">{product.name}</h4>
                                            <div className="flex gap-1 mb-2">
                                                {renderStars(product.rating)}
                                            </div>
                                            <div className="flex items-baseline gap-2">
                                                <p className="font-semibold text-gray-900">{product.price}</p>
                                                {product.originalPrice && (
                                                    <p className="text-xs text-gray-500 line-through">{product.originalPrice}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomeComponent1
