import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { Fade } from 'react-awesome-reveal';

const EquipmentCard = ({ equipment }) => {




    const { _id, image, itemName, categoryName, price, description } = equipment;
    const ratting = 4;

    return (
        <Fade>
            <div className="bg-white border flex flex-col h-[450px] justify-between dark:border-2 dark:border-white dark:bg-[#121212] shadow-lg rounded-lg slider-shadow">
                {/* Product Image */}
                <div className='h-52 p-2 rounded-md'>
                    <img
                        src={image}
                        alt={itemName}
                        className="w-full h-[180px] object-cover overflow-hidden transition-transform transform hover:scale-105 hover:rounded-lg"
                    />
                </div>

                {/* Product Details */}
                <div className="p-4 text-light-text dark:text-dark-text">
                    <h3 className="text-lg font-semibold">{itemName.slice(0, 30)}...</h3>
                    <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                        Category: {categoryName}
                    </p>
                    <p className="text-xl font-bold text-light-primary dark:text-dark-primary mt-2">
                        ${price}
                    </p>

                    <div>

                        <ReactStars

                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            edit={false}
                            isHalf={true}
                            value={ratting}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        >

                        </ReactStars>
                    </div>


                    {/* View Details Button */}
                    <Link
                        to={`/allEquipments/${_id}`}
                        className="mt-4 inline-block w-full text-center btn-outline text-white 
               text-sm font-medium py-2 px-4 rounded 
               bg-gradient-to-br from-black via-gray-900 to-gray-800
               hover:from-gray-700 hover:via-gray-800 hover:to-black
               dark:bg-dark-primary dark:text-dark-text
               dark:hover:bg-dark-secondary"
                    >
                        <span className="hidden md:inline">View</span> Details
                    </Link>
                </div>
            </div>
        </Fade>
    );
};

export default EquipmentCard;
