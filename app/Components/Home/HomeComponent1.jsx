import React from 'react'

const HomeComponent1 = () => {
    return (
        <div className="w-full overflow-x-hidden container">
            {/* Top Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-12 py-8 bg-white w-full">
                {/* Free Shipping */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                        {/* Icon placeholder */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Free Shipping & Returns</h3>
                        <p className="text-xs text-gray-600">For all orders over $50</p>
                    </div>
                </div>

                {/* Secure Payment */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                        {/* Icon placeholder */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Secure Payment</h3>
                        <p className="text-xs text-gray-600">We ensure secure payment</p>
                    </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                        {/* Icon placeholder */}
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm text-gray-900">Money Back Guarantee</h3>
                        <p className="text-xs text-gray-600">Any back within 30 days</p>
                    </div>
                </div>

                {/* Customer Support */}
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                        {/* Icon placeholder */}
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
                    <div className="w-40 h-40 bg-gray-200 rounded flex items-center justify-center">
                        {/* Image placeholder */}
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
                    <div className="w-40 h-40 bg-gray-700 rounded flex items-center justify-center">
                        {/* Image placeholder */}
                    </div>
                </div>
            </div>

            {/* Products Section */}
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

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Product Images Sidebar */}
                                <div className="flex flex-col gap-3">
                                    <div className="w-24 h-24 bg-gray-200 rounded border-2 border-gray-400 flex items-center justify-center">
                                        {/* Thumbnail placeholder */}
                                    </div>
                                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                        {/* Thumbnail placeholder */}
                                    </div>
                                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                        {/* Thumbnail placeholder */}
                                    </div>
                                    <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                                        {/* Thumbnail placeholder */}
                                    </div>
                                </div>

                                {/* Main Product Image and Details */}
                                <div>
                                    <div className="relative mb-6">
                                        <div className="w-full bg-gray-100 rounded-lg flex items-center justify-center" style={{ aspectRatio: '1' }}>
                                            {/* Main product image placeholder */}
                                            <span className="text-gray-400">Product Image</span>
                                        </div>
                                        <span className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">25% OFF</span>
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-900 mb-4">Coat Pool Comfort Jacket</h4>

                                    <div className="mb-4">
                                        <div className="flex items-baseline gap-2 mb-2">
                                            <span className="text-xl font-bold text-gray-900">$150.00</span>
                                            <span className="text-gray-600">–</span>
                                            <span className="text-xl font-bold text-gray-900">$180.00</span>
                                        </div>
                                        <p className="text-sm text-gray-600">Offer Ends in: <span className="font-semibold text-gray-900">0 days, 00 : 00 : 00</span></p>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex gap-1">
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-yellow-400">★</span>
                                            <span className="text-yellow-400">★</span>
                                        </div>
                                        <span className="text-sm text-gray-600">(3 Reviews)</span>
                                    </div>

                                    <div className="mb-6">
                                        <p className="text-sm font-semibold text-gray-900 mb-2">Size:</p>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:border-gray-400">Extra Large</button>
                                            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:border-gray-400">Large</button>
                                            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:border-gray-400">Medium</button>
                                            <button className="px-4 py-2 border border-gray-300 rounded text-sm text-gray-700 hover:border-gray-400">Small</button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="flex items-center border border-gray-300 rounded">
                                            <button className="w-10 h-10 flex items-center justify-center text-gray-600">−</button>
                                            <span className="w-10 text-center">1</span>
                                            <button className="w-10 h-10 flex items-center justify-center text-gray-600">+</button>
                                        </div>
                                        <button className="flex-1 bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600">
                                            ADD TO CART
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-600">
                                        <button className="flex items-center gap-2 hover:text-gray-900">
                                            <span>♡</span> {/* Heart icon placeholder */}
                                        </button>
                                        <button className="flex items-center gap-2 hover:text-gray-900">
                                            <span>⊛</span> {/* Compare icon placeholder */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            {/* Product 1 */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
                                <div className="w-20 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
                                    {/* Product image placeholder */}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Kitchen Cooker</h4>
                                    <div className="flex gap-1 mb-2">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                    </div>
                                    <p className="font-semibold text-gray-900">$150.00</p>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
                                <div className="w-20 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
                                    {/* Product image placeholder */}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Professional Pixel Camera</h4>
                                    <div className="flex gap-1 mb-2">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-gray-300">★</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="font-semibold text-gray-900">$215.68</p>
                                        <p className="text-xs text-gray-500 line-through">$280.40</p>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="bg-white rounded-lg border border-gray-200 p-4 flex gap-4">
                                <div className="w-20 h-20 bg-gray-200 rounded shrink-0 flex items-center justify-center">
                                    {/* Product image placeholder */}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Sport Women's Wear</h4>
                                    <div className="flex gap-1 mb-2">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-gray-300">★</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <p className="font-semibold text-gray-900">$220.20</p>
                                        <p className="text-xs text-gray-500 line-through">$280.82</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponent1
