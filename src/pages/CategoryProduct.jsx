import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EquipmentCard from '../components/Home/EquipmentCard';

const CategoryProduct = () => {
    const { cName } = useParams()
    const [catProducts, setCatProducts] = useState([])
    // console.log(cName)

    useEffect(() => {
        fetch(`https://sport-express-server.vercel.app/allEquipments`)
            .then(res => res.json())
            .then(data => {
                const filterByCategory = [...data].filter((p) => p.categoryName.includes(cName))
                setCatProducts(filterByCategory)
            })
    }, [])







    // console.log(catProducts)
    if (catProducts.length == 0) {
        return <div><h2 className='text-xl font-light md:text-2xl text-center my-10 lg:text-3xl'>There is No Product Of This Criteria</h2></div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {catProducts.map(item => <EquipmentCard equipment={item}></EquipmentCard>)}
        </div>
    );
};

export default CategoryProduct;