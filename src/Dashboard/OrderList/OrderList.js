import { useQuery } from '@tanstack/react-query';
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/Context';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';
// import CommingSoon from '../../assets/CommingSoon.json'

const OrderList = () => {

    const { user } = useContext(AuthContext)

    const url = `https://glamy-girl-server.vercel.app/orders`;

    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDoctor = () => {

    }
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


    const handleDeleteDoctor = (order) => {
        console.log(order._id)
        fetch(`https://glamy-girl-server.vercel.app/orders/${order._id}`, {
            method: "DELETE",
            // headers : {
            //     authorization : `bearer ${localStorage.getItem("accessToken")}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("Deleted Successfully")
                }

            })
    }




    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-10 mb-60 text-start px-6'>
            <h1 className='text-4xl font-bold  text-black md:text-white mb-10'>orders FOR SELL</h1>
            <h1 className='text-white-500 text-sm font-bold mb-2'>Click the advertise button to display your item at Homepage.</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                        
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
                                    <td>{item.price}</td>
                
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure tou want to delete this?`}
                message={`If you delete it can not be undone.`}
                closeModal={closeModal}
                successButtonName="Delete"
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default OrderList;