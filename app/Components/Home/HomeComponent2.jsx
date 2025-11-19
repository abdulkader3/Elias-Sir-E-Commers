import React from 'react'

const HomeComponent2 = () => {
    const categories = [
        { id: 1, name: 'Fashion' },
        { id: 2, name: 'Furniture' },
        { id: 3, name: 'Shoes' },
        { id: 4, name: 'Sports' },
        { id: 5, name: 'Games' },
        { id: 6, name: 'Computers' },
    ]

    return (
        <div className="bg-gray-100 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-gray-800 mb-12">
                    Top Categories Of The Month
                </h2>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category) => (
                        <div key={category.id} className="flex flex-col items-center">
                            {/* Image/Icon Container */}
                            <div className="bg-white rounded-lg p-8 w-full aspect-square flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
                                {/* Placeholder for icon/image - to be filled later */}
                                <div className="text-gray-300 text-6xl">
                                    {/* Icon/Image goes here */}
                                </div>
                            </div>

                            {/* Category Name */}
                            <p className="text-center text-gray-700 font-medium text-sm">
                                {category.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeComponent2
