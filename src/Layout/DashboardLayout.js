import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Navbar from '../Shared/Navbar';



const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext)


    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    Hi
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side shadow-md bg-black text-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-96  mx-auto items-center uppercase text-white">
                        <>
                            <li>
                                <div className='mt-6  flex flex-col items-center mx-auto '>
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
                                                                    <img src="" />
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="avatar mb-2 mx-auto ">
                                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                                                        <img src="" />

                                                    </div>
                                                </div>
                                            </>
                                    }
                                    <p className='mt-2'>{user?.displayName}</p>
                                    <p className='mb-2 '>{user?.email}</p>
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