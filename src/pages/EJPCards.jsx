import React from 'react';
import EquipmentCard from '../components/Home/EquipmentCard';

const EJPCards = ({ equipments }) => {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 max-w-screen-xl  mx-auto'>
                {
                    equipments.map(card => (
                        <EquipmentCard  equipment={card}></EquipmentCard>
                    ))
                }
            </div>
        </>
    );
};

export default EJPCards;