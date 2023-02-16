import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaMailBulk, FaStar, FaTruck } from 'react-icons/fa';
import DetailsModal from './DetailsModal/DetailsModal';
import { AuthContext } from '../../../Context/Context';


const DetailsCard = ({ category, handleUpdate }) => {
    const [phone, setPhone] = useState(null)
    
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { _id, price, brand, title, seller, img } = category




    const handleWishList = () => {

        const wishlist = {
            name: title,
            email: "ishratzahan6102@gmail.com",
            price: price,
            img: img,
            brand: brand
        }

        console.log(wishlist)
        fetch('https://glamy-girl-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setPhone(null)
                    toast.success('Added to cart!')
                    navigate('/dashboard/order')
                }
                else {
                    toast.error(data.message)
                }
            })

    }




    return (
       <div className='py-20'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div>
                <img className='w-full h-80  mx-auto px-10 py-4 md:p-4 bg-white' src={img} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl text-white-700 ">{title} </h2>
                <p className='text-white-400'>{seller}  </p>
                <p className='text-white-400 text-sm'>Dhaka, Bangladesh</p>

                <div className='flex flex-row gap-4 mt-2'>
                    <div className="flex flex-row">
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                    </div>
                    <span className='text-white-400'>5 star reviews</span>
                </div>
                <p>Availability: <span className='text-green-600  font-semibold'>In stock</span></p>
                <p className='font-semibold mt-4 text-xl'>{price} </p>
                <div className='flex flex-row text-white-700 mt-4 mb-4'>
                    <FaTruck className='mt-1 mr-2'></FaTruck>
                    <span className='mr-6'>Shipping</span>

                </div>
                <div className="card-actions justify-start mt-6">
                    <td>
                        <label className="btn btn-primary normal-case rounded-sm" onClick={() => handleWishList()}>Add To Cart</label>
                    </td>

                    <label onClick={() => setPhone(category)} htmlFor="details-modal" className="btn btn-warning rounded-sm normal-case" >See details</label>
                </div>
            </div>

            {
                phone &&
                <DetailsModal
                    phone={phone}
                    setPhone={setPhone}
                ></DetailsModal>
            }
        </div>
       </div>

    );
};

export default DetailsCard;



