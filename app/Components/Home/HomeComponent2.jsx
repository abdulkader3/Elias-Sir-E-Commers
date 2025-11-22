import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/photos/2-1.jpg'
import image2 from '../../../public/photos/2-2.jpg'
import image3 from '../../../public/photos/2-3.jpg'
import image4 from '../../../public/photos/2-4.jpg'
import image5 from '../../../public/photos/2-5.jpg'
import image6 from '../../../public/photos/2-6.jpg'


const HomeComponent2 = () => {
    const categories = [
        { id: 1, name: 'Fashion',image : image1 },
        { id: 2, name: 'Furniture',image : image2 },
        { id: 3, name: 'Shoes',image : image3 },
        { id: 4, name: 'Sports',image : image4 },
        { id: 5, name: 'Games', image : image5 },
        { id: 6, name: 'Computers',image : image6 },
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
                            <div className="bg-white rounded-lg p-1 w-full aspect-square flex items-center justify-center mb-4 shadow-sm hover:shadow-md transition-shadow">
                                {/* Placeholder for icon/image - to be filled later */}
                                <div className="w-full h-full">
                                    <Image src={category?.image} alt='photos' className='w-full h-full'/>
                                    
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
