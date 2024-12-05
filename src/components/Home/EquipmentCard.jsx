import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {

    const { _id, image, itemName, categoryName, price, description, rating, customization, processingTime, stockStatus, userName, userEmail } = equipment;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Product Image */}
            <img
                src={image}
                alt={itemName}
                className="w-full h-72 object-cover"
            />

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{itemName}</h3>
                <p className="text-sm text-gray-500">Category: {categoryName}</p>
                <p className="text-xl font-bold text-blue-500 mt-2">${price}</p>

                {/* View Details Button */}
                <Link
                    to={`/allEquipments/${_id}`}
                    className="mt-4 inline-block bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded hover:bg-blue-600"
                >
                    <span className="hidden md:inline">View</span> Details
                </Link>
            </div>
        </div>

    );
};

export default EquipmentCard;