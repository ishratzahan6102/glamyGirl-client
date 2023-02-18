import { useQuery } from '@tanstack/react-query';
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Context';
import Loading from '../../Shared/Loading/Loading';

const OrderList = () => {
    const { user } = useContext(AuthContext)
    const url = `https://glamy-girl-server.vercel.app/orders`;

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                //   headers: {
                //     authorization : `bearer ${localStorage.getItem('accessToken')}`
                //   }
            });

            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10 mb-60 text-start px-6'>
            <h1 className='text-white-500 text-xs font-bold mb-2'>Admin Action Board</h1>
            <h1 className='text-4xl font-bold  text-black mb-10'>All Orders</h1>
            
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Buyer</th>
                        
                        </tr>
                    </thead>
                    <tbody className=' my-4'>

                        {   orders && 
                            orders?.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={item.img}  alt="doctors-photo"/>
                                        </div>
                                    </div></td>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>${item.price}</td>
                                    <td>{item.seller}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;