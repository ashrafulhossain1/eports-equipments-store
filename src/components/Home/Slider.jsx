import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Banner = () => {
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
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/b2rxKTY/football-488714.jpg"
                            alt="Football Equipment"
                        />
                        {/* Content */}
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Discover Premium Football Equipment
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">
                                Elevate your game with the best football gear designed for champions.
                            </p>
                            <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                                <a href="#category">Explore More</a>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/jyM1j7B/cricket-8444899.jpg"
                            alt="Cricket Equipment"
                        />
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                Ultimate Cricket Gear Collection
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">
                                From bats to pads, find everything you need for the perfect innings.
                            </p>
                            <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                                <a href="#category">Explore More</a>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/NCZLDDw/badminton-1428046-1920.jpg"
                            alt="Badminton Equipment"
                        />
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
                                Badminton Essentials for Every Player
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">
                                Gear up with premium rackets and accessories to smash your way to success.
                            </p>
                            <button className="mt-4 px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                                <a href="#category">Explore More</a>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
