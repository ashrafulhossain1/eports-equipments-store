import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../components/Home/EquipmentCard";
import Slider from "../components/Home/Slider";
import Category from "../components/Home/Category";
import BestSellingEquip from "../components/Home/BestSellingEquip";
import FAQ from "../components/Home/FAQ";
import { Fade } from "react-awesome-reveal";
import Reviews from "../components/Home/Reviews";


const Home = () => {
    const equipments = useLoaderData()
    // console.log(equipments)
    return (
        <div className="bg-gray-100  dark:border-white dark:bg-dark-card">
            {/* banner slider */}
            <section className="">
                <Slider></Slider>
            </section>
            {/* home equips */}
            <div >
                <Fade direction="up" duration={1000}>
                    <div className="md:w-1/2 w-full mx-auto text-center text-black md:space-y-4 space-y-2 py-5 dark:text-dark-text">
                        <h1 className="text-4xl ">Explore Our Wide Range of Sports Categories</h1>
                        <p className="text-sm md:text-base">Discover top-quality sports equipment and accessories in our diverse product categories, including Cricket, Football, Basketball, Tennis, Badminton, and more. Shop by category to find exactly what you need for your game.</p>
                    </div>
                </Fade>

                <section className="grid py-6 md:py-12 grid-cols-1 md:grid-cols-3 dark:bg-dark-card lg:grid-cols-4 gap-10 max-w-screen-xl mx-auto">
                    {
                        equipments.map((equipment) => <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
                    }
                </section>
            </div>
            {/* category section */}
            <section id="category">
                <Category></Category>
            </section>
            <section>
                <Fade direction="left" duration={1500}>
                    <BestSellingEquip></BestSellingEquip>
                </Fade>
            </section>
            <section>
                <Fade>
                    <Reviews></Reviews>
                </Fade>
            </section>
            <section>
                {/* <Fade direction="top" duration={1000}> */}
                <FAQ></FAQ>
                {/* </Fade> */}
            </section>
        </div>
    );
};

export default Home;