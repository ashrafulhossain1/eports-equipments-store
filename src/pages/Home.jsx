import { useLoaderData } from "react-router-dom";
import EquipmentCard from "../components/Home/EquipmentCard";


const Home = () => {
    const equipments = useLoaderData()
    console.log(equipments)
    return (
        <div className="my-24">
            <div>
                <h1 className="text-4xl text-center my-5">This is Banner Slider</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 max-w-screen-xl mx-auto">
                {
                    equipments.map((equipment)=> <EquipmentCard key={equipment._id} equipment={equipment}></EquipmentCard>)
                }
            </div>
        </div>
    );
};

export default Home;