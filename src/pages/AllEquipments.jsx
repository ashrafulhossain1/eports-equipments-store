import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

const AllEquipments = () => {
    const loadedData = useLoaderData();
    const [equipments, setEquipments] = useState(loadedData);


    const handleSorting = () => {
        fetch("https://sport-express-server.vercel.app/sortBy")
            .then(res => res.json())
            .then(data => {
                setEquipments(data)
            })
    }




    console.log(equipments);
    return (
        <div>
            <Helmet>
                <title>All Sports Equipments</title>
            </Helmet>
            {/* Heading */}
            <div>
                <h2 className="text-2xl md:text-4xl text-center my-8">Total Equipments: {equipments.length}</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <div className="my-4 text-center">
                    <button onClick={handleSorting}
                        className="bg-green-500 text-white px-4 py-2 rounded mx-2 hover:bg-green-600 shadow-lg transition-all duration-200"
                    >
                        Sort by Price
                    </button>
                </div>

                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">#</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Name</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Category</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Price</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {equipments.map((equipment, index) => (
                            <tr key={equipment._id} className="hover:bg-gray-100">
                                <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center">{index + 1}</td>
                                <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{equipment.itemName}</td>
                                <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{equipment.categoryName}</td>
                                <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center">${equipment.price}</td>
                                <td className="border text-xs md:text-base border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-center">
                                    <Link to={`/allEquipments/${equipment._id}`} className="bg-blue-500 text-white px-2 md:px-3 py-2 rounded hover:bg-blue-600">
                                        <button>
                                            <span className="block sm:hidden">Details</span>
                                            <span className="hidden sm:block">View Details</span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipments;
