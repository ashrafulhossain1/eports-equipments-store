import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);

    const { _id, image, itemName, categoryName, price, description, rating, customization, processingTime, stockStatus, userName, userEmail } = loadedData;

    return (
        <div className="bg-gray-100  py-8">
            <Helmet><title>Equipments Details</title></Helmet>
            <div className="container mx-auto px-4">
                {/* Product Card */}
                <div className="bg-white rounded-lg shadow-lg p-3 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="flex justify-center items-center md:h-[450px]">
                        <img
                            src={image || "https://via.placeholder.com/400"}
                            alt={itemName}
                            className=" object-cover w-full h-full rounded-md shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">{itemName}</h2>
                            <p className="text-gray-600 text-sm mv-2 md:mb-4">Category: {categoryName}</p>

                            {/* Price and Stock */}
                            <div className="flex items-center mb-2 md:mb-4">
                                <p className="text-2xl font-semibold text-red-600">${price}</p>
                                <p className="ml-4 text-sm text-gray-500">{stockStatus > 0 ? `${stockStatus} items available` : "Out of stock"}</p>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center mv-2 md:mb-4">
                                <span className="text-yellow-500 text-xl font-bold">{rating}</span>
                                <span className="ml-2 text-sm text-gray-500">/ 5 Ratings</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 text-sm  md:text-base mb-2">{description}</p>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-500">
                                Customization: {customization || "N/A"}
                            </p>
                            <p className="text-sm text-gray-500">
                                Processing Time: {processingTime || "Not Specified"}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Seller: {userName}
                            </p>
                            <p className="text-sm text-gray-500 mt-2">
                                Email: {userEmail}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                                Add to Cart
                            </button>
                            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
