import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../components/Home/EquipmentCard";
import Slider from "../components/Home/Slider";


const Home = () => {
    const equipments = useLoaderData()
    // console.log(equipments)
    return (
        <div className="">
            {/* banner slider */}
            <section>
                <Slider></Slider>
            </section>
            {/* home equips */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 max-w-screen-xl mx-auto">
                {
                    equipments.map((equipment) => <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
                }
            </section>
            {/* category section */}
            <section>

            </section>
        </div>
    );
};

export default Home;