import React from 'react';
import { FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './CategoryCard.css'

const CategoryCard = ({card}) => {

    const { brand, _id, img } = card

    return (
        <div className='text-start'>
            <div className="card mx-auto w-80  ">
                <img src={img} className='max-h-64 w-80  relative mx-auto card-img' alt="makeup" />
                <div className=' h-full w-full  product-hover mx-auto absolute top-0 left-0 lg:left-0 '>
                    <div className='top-10 p-4 right-0 flex flex-col lg:left-0 absolute'>
                        <Link>
                            <button className="btn rounded-none  text-white   btn-square">
                                <FaSearch></FaSearch>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  my-2  text-white     btn-square">
                                <FaHeart></FaHeart>
                            </button>
                        </Link>
                        <Link>
                            <button className="btn rounded-none  text-white   btn-square">
                                <FaShoppingBag></FaShoppingBag>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card-body w-80 mx-auto product-card bg-gray-200  text-start">
                <h2 className="text-xl font-bold text-primary">
                    {brand}

                </h2>
                <p className='text-sm text-black  '>Watch More Collection</p>
                <button className="btn btn-primary btn-sm w-1/3 rounded-none   mr-4">
                <Link to={`/products/${brand}`} >Shop</Link>
                </button>

            </div>
           

        </div>
    );
};

export default CategoryCard;