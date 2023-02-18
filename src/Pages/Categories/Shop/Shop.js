import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Shop = () => {
    const categories = useLoaderData()

    const {brand} = categories
    return (
        <div className='max-w-[1200px] p-6 md:p-0 pt-32 mx-auto  '>
            
            <h1 className='text-4xl font-bold text-center text-white'></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-10'>
                   {
                    categories.map(category => <DetailsCard
                    key={category._id}
                    category={category}
                    >
                    </DetailsCard>)
                   }
            </div>

           
                
        </div>
    );
};

export default Shop;