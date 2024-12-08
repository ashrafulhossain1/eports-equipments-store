import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../components/Home/EquipmentCard";
import Slider from "../components/Home/Slider";
import Category from "../components/Home/Category";
import BestSellingEquip from "../components/Home/BestSellingEquip";
import FAQ from "../components/Home/FAQ";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const equipments = useLoaderData()
    // console.log(equipments)
    return (
        <div className="">
            {/* banner slider */}
            <section className="">
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
                <Category></Category>
            </section>
            <section>
                <Fade direction="left" duration={1500}>
                    <BestSellingEquip></BestSellingEquip>
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