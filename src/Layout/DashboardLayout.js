import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Navbar from '../Shared/Navbar';
import avatar from '../assets/avatar.jpg'



const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext)


    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile bg-white ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className='flex justify-between items-center'> 
                    <p className='px-6 text-xs  font-bold'>Welcome To Dashboard!</p>
                    <div className=' flex lg:hidden'>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className=" btn btn-sm">Open Dashboard</label>
                    </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-md md:bg-black md:text-white bg-white  text-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                  
                    <ul className="menu w-64  mr-auto items-center uppercase text-white">
                    <div className=' flex mr-auto lg:hidden'>
                    <label htmlFor="dashboard-drawer" tabIndex={2} className=" btn btn-sm btn-circle btn-primary">X</label>
                    </div>
                        <>
                            <li>
                                <div className='mt-6 flex flex-col items-center mx-auto '>
                                
                                    {
                                        user?.uid ?
                                            <>
                                                <div className="avatar mb-2 ">
                                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        {
                                                            user?.photoURL ?
                                                                <>
                                                                    <img src={user?.photoURL} />
                                                                </>
                                                                :
                                                                <>
                                                                    <img src={avatar} />
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="avatar mb-2 mx-auto ">
                                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                                                        <img src={avatar} />

                                                    </div>
                                                </div>
                                            </>
                                    }
                                    <p className='mt-2 text-sm'>{user?.displayName}</p>
                                    <p className='mb-2 text-sm '>{user?.email}</p>
                                    {
                                        user?.uid &&

                                        <button onClick={logOut} className='btn btn-primary normal-case  btn-wide mx-auto'>Logout</button>
                                    }
                                </div>
                            </li>
                        </>
                        <li>
                            <div>
                                <Link to='/dashboard/order'>Order List</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to='/dashboard/addProduct'>Add Products</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to='/dashboard/product'>Added Products</Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to='/dashboard/addCustomer'>Add Customers</Link>
                            </div>
                        </li>
                        <li>
                            <div >
                                <Link to='/dashboard/customer'>Added Customers</Link>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;