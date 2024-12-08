import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const UpdateEquipments = () => {
    const { user } = useContext(AuthContext)

    const equipment = useLoaderData()
    // console.log(equipment)
    const { _id, image, itemName, categoryName, price, description, rating, processingTime, stockStatus, userName, userEmail } = equipment;


    const handleUpdate = (e) => {
        e.preventDefault()
        // console.log('clicked add equip')
        const form = e.target;

        // Accessing form field values by their name attribute
        const image = form.image.value;
        const itemName = form.itemName.value;
        const categoryName = form.categoryName.value;
        const price = parseInt(form.price.value);
        const description = form.description.value;
        const rating = form.rating.value;
        const processingTime = form.processingTime.value;
        const stockStatus = form.stockStatus.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;

        // Logging form field values
        const updateEquipment = { image, itemName, categoryName, price, description, rating, processingTime, stockStatus, userName, userEmail };
        // console.log(updateEquipment)


        fetch(`https://sport-express-server.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateEquipment)
        })
            .then(res => res.json())
            .then(data => {
                // form.reset()
                // console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        // position: "top-end",
                        icon: "success",
                        title: "Your Updated has been saved",
                        showConfirmButton: true,
                        // timer: 1500
                    });
                    form.reset()
                }
            })
    }


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded my-10 border">
            <Helmet>
                <title>Update Equipments Info</title>
            </Helmet>
            <h1 className="text-3xl font-semibold text-center mb-6">Update Equipment</h1>
            <form onSubmit={handleUpdate} className="grid gap-4 md:grid-cols-2">


                {/* Item Name */}
                <div className="col-span-2 ">
                    <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                        Item Name
                    </label>
                    <input
                        type="text"
                        name="itemName"
                        id="itemName"
                        placeholder="Update Item Name"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={itemName}
                        required
                    />
                </div>

                {/* Image URL */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Update Image URL"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={image}
                        required
                    />
                </div>

                {/* Category Name */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                        Category Name
                    </label>
                    <select
                        name="categoryName"
                        id="categoryName"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={categoryName}
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Tennis">Tennis</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                {/* Price */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Update Price (in USD)"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={price}
                        required
                    />
                </div>

                {/* Rating */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                        Rating
                    </label>
                    <select
                        name="rating"
                        id="rating"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={rating}
                        required
                    >
                        <option value="">Select Rating</option>
                        {[...Array(5)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1} Star{index > 0 && 's'}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Description */}
                <div className="col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder="Update Description"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        rows="4"
                        defaultValue={description}
                        required
                    ></textarea>
                </div>

                {/* Processing Time */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="processingTime" className="block text-sm font-medium text-gray-700">
                        Processing Time
                    </label>
                    <input
                        type="date"
                        name="processingTime"
                        id="processingTime"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={processingTime}
                        required
                    />
                </div>

                {/* Stock Status */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="stockStatus" className="block text-sm font-medium text-gray-700">
                        Stock Status
                    </label>
                    <input
                        type="number"
                        name="stockStatus"
                        id="stockStatus"
                        placeholder="Update Stock Quantity"
                        className="w-full p-3 border border-gray-300 rounded mt-1"
                        defaultValue={stockStatus}
                        required
                    />
                </div>

                {/* User Name */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                        User Name
                    </label>
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        className="w-full p-3 border border-gray-300 rounded mt-1 bg-gray-100"
                        defaultValue={user?.displayName}
                        readOnly
                    />
                </div>

                {/* User Email */}
                <div className="col-span-2 md:col-span-1">
                    <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                        User Email
                    </label>
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="User Email"
                        className="w-full p-3 border border-gray-300 rounded mt-1 bg-gray-100"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-3 px-6 rounded hover:bg-green-800"
                    >
                        Update Equipment
                    </button>
                </div>
            </form>
        </div>

    );
};

export default UpdateEquipments;