import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const Category = () => {
const navigate = useNavigate()


    const handleCategory = (categoryName) => {
        navigate(`/catBased/${categoryName}`)
        console.log(`Category clicked: ${categoryName}`);
    };

    return (
        <div id="category" className="py-10 bg-light-card dark:bg-[#121212] dark:rounded-lg">
            <div className="container mx-auto px-4">
                {/* Category Title */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 dark:text-white">
                    Product Categories
                </h2>

                {/* Products Grid */}
                <div className="block md:hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Cricket */}
                        <div onClick={() => handleCategory("Cricket")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/7g2Qxf9/cricLogo.jpg"
                                alt="Cricket"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Cricket
                            </h3>
                        </div>

                        {/* Football */}
                        <div onClick={() => handleCategory("Football")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/BydrRbS/football.jpg"
                                alt="Football"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Football
                            </h3>
                        </div>

                        {/* Basketball */}
                        <div onClick={() => handleCategory("Basketball")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/Q9dbpqh/basketball.jpg"
                                alt="Basketball"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Basketball
                            </h3>
                        </div>

                        {/* Tennis */}
                        <div onClick={() => handleCategory("Tennis")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/txnTzy8/download.jpg"
                                alt="Tennis"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Tennis
                            </h3>
                        </div>

                        {/* Badminton */}
                        <div onClick={() => handleCategory("Badminton")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/t4VTGX1/NCS-Image-01-2.jpg"
                                alt="Badminton"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Badminton
                            </h3>
                        </div>

                        {/* Others */}
                        <div onClick={() => handleCategory("Others")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co.com/qW97h1Q/Hayward-Field-rendering-03-19.jpg"
                                alt="Others"
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg text-center font-semibold text-gray-800">
                                Others
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <Marquee pauseOnHover={true}>
                        <div className="md:grid md:grid-cols-6 gap-6">
                            {/* Cricket */}
                            <div onClick={() => handleCategory("Cricket")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer ml-8">
                                <img
                                    src="https://i.ibb.co.com/7g2Qxf9/cricLogo.jpg"
                                    alt="Cricket"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Cricket
                                </h3>
                            </div>

                            {/* Football */}
                            <div onClick={() => handleCategory("Football")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                                <img
                                    src="https://i.ibb.co.com/BydrRbS/football.jpg"
                                    alt="Football"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Football
                                </h3>
                            </div>

                            {/* Basketball */}
                            <div onClick={() => handleCategory("Basketball")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                                <img
                                    src="https://i.ibb.co.com/Q9dbpqh/basketball.jpg"
                                    alt="Basketball"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Basketball
                                </h3>
                            </div>

                            {/* Tennis */}
                            <div onClick={() => handleCategory("Tennis")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                                <img
                                    src="https://i.ibb.co.com/txnTzy8/download.jpg"
                                    alt="Tennis"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Tennis
                                </h3>
                            </div>

                            {/* Badminton */}
                            <div onClick={() => handleCategory("Badminton")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                                <img
                                    src="https://i.ibb.co.com/t4VTGX1/NCS-Image-01-2.jpg"
                                    alt="Badminton"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Badminton
                                </h3>
                            </div>

                            {/* Others */}
                            <div onClick={() => handleCategory("Others")} className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
                                <img
                                    src="https://i.ibb.co.com/qW97h1Q/Hayward-Field-rendering-03-19.jpg"
                                    alt="Others"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-lg text-center font-semibold text-gray-800">
                                    Others
                                </h3>
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Category;
