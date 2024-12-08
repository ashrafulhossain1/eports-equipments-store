import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {
    const { _id, image, itemName, categoryName, price } = equipment;

    return (
        <div className="bg-light-card dark:border-2 dark:border-white dark:bg-[#121212] shadow-lg rounded-lg ">
            {/* Product Image */}
            <img
                src={image}
                alt={itemName}
                className="w-full h-72 object-cover overflow-hidden transition-transform transform hover:scale-105 hover:rounded-lg"
            />

            {/* Product Details */}
            <div className="p-4 text-light-text dark:text-dark-text">
                <h3 className="text-lg font-semibold">{itemName}</h3>
                <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                    Category: {categoryName}
                </p>
                <p className="text-xl font-bold text-light-primary dark:text-dark-primary mt-2">
                    ${price}
                </p>

                {/* View Details Button */}
                <Link
                    to={`/allEquipments/${_id}`}
                    className="mt-4 inline-block bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text text-sm font-medium py-2 px-4 rounded hover:bg-light-secondary dark:hover:bg-dark-secondary"
                >
                    <span className="hidden md:inline">View</span> Details
                </Link>
            </div>
        </div>
    );
};

export default EquipmentCard;
