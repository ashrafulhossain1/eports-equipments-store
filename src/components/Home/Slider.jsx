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
                {/* Slide 1 - Parenting Objective Quote */}
                <SwiperSlide>
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/b2rxKTY/football-488714.jpg"
                            alt="Parenting Inspiration"
                        />
                        {/* Quote */}
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                "The goal of parenting is not to control, but to guide."
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">- L.R. Knost</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 - Early Rise Quote */}
                <SwiperSlide>
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/jyM1j7B/cricket-8444899.jpg"
                            alt="Early Rise Inspiration"
                        />
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                                "Early to bed and early to rise makes a man healthy, wealthy, and wise."
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">- Benjamin Franklin</p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 - Psychologist's Best Quote */}
                <SwiperSlide>
                    <div className="relative h-[250px] sm:h-[400px] md:h-[95vh]">
                        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.ibb.co.com/NCZLDDw/badminton-1428046-1920.jpg"
                            alt="Psychologist Wisdom"
                        />
                        <div className="absolute top-1/2 left-6 sm:left-10 transform -translate-y-1/2 z-20 text-white px-4 w-full md:w-5/12">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold ">
                                "The good life is a process, not a state of being."
                            </h2>
                            <p className="mt-2 text-base sm:text-lg">- Carl Rogers</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
