import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const BestSellingEquip = () => {
    return (
        <div className="px-4 md:px-16 py-8">
            <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000, // Adjust delay (in ms) for autoplay
                    disableOnInteraction: false, // Prevent autoplay from pausing on user interaction
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://i.ibb.co/JQVL8NP/athletex-shoes-3-opt.jpg"
                                className="w-full h-[350px] object-cover"
                                alt="Athlete Shoes"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                Athletex Running Shoes
                            </h2>
                            <p className="text-gray-600 dark:text-white">
                                Comfortable and lightweight running shoes designed for daily use. Perfect for sports enthusiasts looking for both style and performance.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://i.ibb.co/RvqDL7n/H56d8876351194ef2b0af89b66aedfca2f-jpg-720x720q50.jpg"
                                className="w-full h-[350px]"
                                alt="Sporty Shoes"
                            />
                        </div>
                        <div className="w-full md:w-1/2 p-4">
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                Sporty Performance Shoes
                            </h2>
                            <p className="text-gray-600 dark:text-white">
                                High-quality performance shoes designed for athletes. Provides exceptional grip and durability, ideal for intense workouts and training.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BestSellingEquip;
