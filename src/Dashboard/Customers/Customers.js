import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import Loading from '../../Shared/Loading/Loading';



const Customers = () => {
    const {user,} = useContext(AuthContext)
    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleItems = () => {

    }
    const { data: items = [], isLoading, refetch } = useQuery({
        queryKey: ['addUser',user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`https://glamy-girl-server.vercel.app/addUser`, {
                    
                })
                const data = await res.json()
                return data

            }
            catch (errors) {

            }
        }
    })

    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div className='my-10 mb-60 text-start px-6'>
              <h1 className='text-white-500 text-xs font-bold mb-2'>Admin Action Board</h1>
            <h1 className='text-4xl font-bold  text-black mb-10'>Added Customers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Avatar</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Location</th>
                    
                        </tr>
                    </thead>
                    <tbody className=' my-4'>

                        {   items && 
                            items?.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={item.picture}  alt="doctors-photo"/>
                                        </div>
                                    </div></td>
                                    <td>{item.user}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.location}</td>
                                   
                                    
                                 
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
           
        </div>
    );
};

export default Customers;