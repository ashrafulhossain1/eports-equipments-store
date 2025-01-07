import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const EquipCard = ({ card, myEquips, setMyEquips }) => {
    const { _id, image, itemName, categoryName, price, rating, customization, processingTime, stockStatus, userName } = card;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sport-express-server.vercel.app/myEquip/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const reamingEquip = myEquips.filter(equip => equip._id != id)
                            setMyEquips(reamingEquip)
                        }
                    })

            }
        });



    }

    return (
        <div className="border flex flex-col justify-between rounded-lg shadow-md md:p-4  p-2 bg-white">
            {/* Image */}
            <div>
                <img
                    src={image}
                    alt={itemName}
                    className="w-full h-[200px]   rounded-t-lg mb-4"
                />
            </div>

            <div>
                {/* Details */}
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">{itemName}</h2>
                    <h2 className="text-sm font-bold text-gray-600"><span>In Stock: </span>{stockStatus} Unit</h2>
                    <p className="text-gray-500">Category: {categoryName}</p>
                    <p className="text-gray-500">Price: ${price}</p>
                    {/* Rating */}
                    <div className="flex items-center">
                        <span className="text-yellow-500 text-xl font-bold">{rating}</span>
                        <span className="ml-2 text-sm text-gray-500">/ 5 Ratings</span>
                    </div>
                    <p className='text-gray-600 font-semibold'>Seller: {userName}</p>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <Link to={`/update/${_id}`}>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EquipCard;