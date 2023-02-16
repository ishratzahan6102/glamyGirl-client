import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch(`https://glamy-girl-server.vercel.app/categories`)
        .then(res => res.json())
        .then(data => setCategory(data))

    }, [category])




    return (
        <div className='py-20 text-center max-w-[1000px] mx-auto px-6 lg:px-0'>
             <h1 className='text-white font-bold text-3xl lg:text-4xl mb-2'>New Collection</h1>
            <p className=' '>Check out the categories</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mt-10' >
                {
                    category.map(card => <CategoryCard
                        key={card._id}
                        card={card}
                        ></CategoryCard>)
                }
                
            </div>
            
        </div>
    );
};

export default Categories;