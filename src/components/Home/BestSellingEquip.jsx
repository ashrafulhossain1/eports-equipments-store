import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const BestSellingEquip = () => {
    return (
        <div className="my-10 mx-auto md:max-w-screen-xl slider-shadow py-4">
            <h2 className="text-3xl font-bold text-center mb-8">Best Selling Equipment</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="fade" // Added fade effect
                modules={[Navigation, Pagination, Autoplay, EffectFade]} // Added effectFade module
                className="mySwiper"
            >
                {/* Slide 1: Badminton */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="md:h-[70vh]">
                            <img
                                className="h-full object-cover"
                                src="https://i.ibb.co.com/RvqDL7n/H56d8876351194ef2b0af89b66aedfca2f-jpg-720x720q50.jpg"
                                alt="Badminton"
                            />
                        </div>
                        <div className="p-6 md:w-1/2 md:flex-1">
                            <h3 className="text-2xl font-semibold mb-4">Premium Badminton Set</h3>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li className="font-bold text-lg text-blue-600">Brand: Victor</li>
                                <li className="font-semibold">Rating: ★★★★☆</li>
                                <li>Includes 2 rackets, shuttlecock, and carrying case.</li>
                            </ul>
                            <p className="text-lg font-bold text-green-600 my-4">$45.99</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                <span>Know More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2: Football Boots */}
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="md:w-1/2 md:h-[70vh]">
                            <img
                                className="h-full object-cover"
                                src="https://i.ibb.co.com/JQVL8NP/athletex-shoes-3-opt.jpg"
                                alt="Football Boots"
                            />
                        </div>
                        <div className="p-6 md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4">Pro Grip Football Boots</h3>
                            <ul className="list-disc pl-5 text-gray-600">
                                <li className="font-bold text-lg text-blue-600">Brand: Nike</li>
                                <li className="font-semibold">Rating: ★★★★★</li>
                                <li>Enhanced grip and lightweight design for superior performance.</li>
                            </ul>
                            <p className="text-lg font-bold text-green-600 my-4">$49.99</p>
                            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                <span>Shop Now</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* You can add more slides here */}
            </Swiper>
        </div>
    );
};

export default BestSellingEquip;
