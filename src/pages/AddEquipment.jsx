import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const AddEquipment = () => {

   const { user } = useContext(AuthContext)


   const handleSubmit = (e) => {
      e.preventDefault()
      console.log('clicked add equip')
      const form = e.target;

      // Accessing form field values by their name attribute
      const image = form.image.value;
      const itemName = form.itemName.value;
      const categoryName = form.categoryName.value;
      const price = form.price.value;
      const description = form.description.value;
      const rating = form.rating.value;
      const customization = form.customization.value;
      const processingTime = form.processingTime.value;
      const stockStatus = form.stockStatus.value;
      const userName = form.userName.value;
      const userEmail = form.userEmail.value;

      // Logging form field values
      const equipmentInfo = { image, itemName, categoryName, price, description, rating, customization, processingTime, stockStatus, userName, userEmail };
      console.log(equipmentInfo)


      fetch("http://localhost:5000/addEquips", {
         method: "POST",
         headers: {
            "content-type": "application/json"
         },
         body: JSON.stringify(equipmentInfo)
      })
         .then(res => res.json())
         .then(data => {
            form.reset()
            console.log(data)
         })
   }




   return (
      <div>

         <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded my-10 border">
            <h1 className="text-3xl font-semibold text-center mb-6">Add Equipment</h1>
            <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
               {/* Image URL */}
               <div className="col-span-2 md:col-span-1">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                     Image URL
                  </label>
                  <input
                     type="text"
                     name="image"
                     id="image"
                     placeholder="Image URL"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
                     required
                  />
               </div>

               {/* Item Name */}
               <div className="col-span-2 md:col-span-1">
                  <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
                     Item Name
                  </label>
                  <input
                     type="text"
                     name="itemName"
                     id="itemName"
                     placeholder="Item Name"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
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
                     placeholder="Price (in USD)"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
                     required
                     step="0.01"
                  />
               </div>

               {/* Description */}
               <div className="col-span-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                     Description
                  </label>
                  <textarea
                     name="description"
                     id="description"
                     placeholder="Description"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
                     rows="4"
                     required
                  ></textarea>
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

               {/* Customization */}
               <div className="col-span-2 md:col-span-1">
                  <label htmlFor="customization" className="block text-sm font-medium text-gray-700">
                     Customization
                  </label>
                  <input
                     type="text"
                     name="customization"
                     id="customization"
                     placeholder="Customization (e.g., extra grip)"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
                  />
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
                     placeholder="Available Stock Quantity"
                     className="w-full p-3 border border-gray-300 rounded mt-1"
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
                     defaultValue
                     ={user?.displayName}
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
                     className="w-full bg-purple-700 text-white py-3 px-6 rounded hover:bg-purple-800"
                  >
                     Add Equipment
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default AddEquipment;