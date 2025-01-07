import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import EquipCard from "../components/MyEquipments/EquipCard";
import { Helmet } from "react-helmet-async";

const MyEquipments = () => {
    const { user } = useContext(AuthContext)
    const [myEquips, setMyEquips] = useState([])

    useEffect(() => {
        fetch(`https://sport-express-server.vercel.app/myEquip?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyEquips(data)
            })

    }, [user])


    return (
        <div className="my-10 max-w-screen-xl mx-auto">
            <Helmet>
                <title>My Equipment List</title>
            </Helmet>
            {myEquips.length === 0 &&
                <div>
                    <h1 className="text-4xl text-center">You haven't added any product yet</h1>
                </div>
            }
            {
                myEquips.length > 0 &&

                <div>
                    <h1 className="text-4xl text-center">Your Total added Equipment: {myEquips.length}</h1>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-16 md:my-8  my-4 p-2">
                        {myEquips.map(card => <EquipCard
                            key={card._id}
                            card={card}
                            myEquips={myEquips}
                            setMyEquips={setMyEquips}
                        ></EquipCard>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default MyEquipments;