import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
    return (
        <div className="overflow-hidden">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={{ clickable: true }}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[400px] md:h-[85vh]">
                        {/* Image */}
                        <div className="h-full w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://i.ibb.co/FBTSBYB/golves.jpg"
                                alt="Parenting Inspiration"
                            />
                        </div>
                        {/* Text */}
                        <div className="p-6 md:p-10 bg-white">
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
                                "The goal of parenting is not to control, but to guide."
                            </h2>
                            <p className="mt-4 text-base md:text-lg text-gray-600">- L.R. Knost</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[400px] md:h-[85vh]">
                        {/* Image */}
                        <div className="h-full w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://i.ibb.co/pKSgyWm/tannis.jpg"
                                alt="Early Rise Inspiration"
                            />
                        </div>
                        {/* Text */}
                        <div className="p-6 md:p-10 bg-white">
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
                                "Early to bed and early to rise makes a man healthy, wealthy, and wise."
                            </h2>
                            <p className="mt-4 text-base md:text-lg text-gray-600">- Benjamin Franklin</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[400px] md:h-[85vh]">
                        {/* Image */}
                        <div className="h-full w-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://i.ibb.co/YcWJys6/816-L9-XC85u-L-AC-SX679.jpg"
                                alt="Psychologist Wisdom"
                            />
                        </div>
                        {/* Text */}
                        <div className="p-6 md:p-10 bg-white">
                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
                                "The good life is a process, not a state of being."
                            </h2>
                            <p className="mt-4 text-base md:text-lg text-gray-600">- Carl Rogers</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
