import React from 'react';
import logo1 from '../../../assets/icons8-open-box-50.png'
import logo2 from '../../../assets/icons8-coins-50.png'
import logo3 from '../../../assets/icons8-campaign-customer-50.png'

const Services = () => {
    return (
        <div className='max-w-[1100px] mx-auto my-4 p-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
            <div className='text-center bg-gradient-to-r from-black rounded-xl p-4 to-black flex flex-col gap-2 items-center mt-4' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo1} />
                    </div>
                </div>
                <p className='text-white font-bold text-xl'>Free Delivery</p>
                <p className='text-white text-sm'>And free returns. See checkout <br/> for delivery dates.</p>
            </div>
            <div className='text-center bg-gradient-to-r from-black rounded-xl p-4 to-black flex flex-col gap-2 items-center mt-4' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo2} />
                    </div>
                </div>
                <p className='text-white font-bold text-xl'>Pay Monthly at 0% APR</p>
                <p className='text-white text-sm'>Choose to check out with Apple <br/> Card Monthly Installments.</p>
            </div>
            <div className='text-center flex flex-col gap-2 items-center mt-4 bg-gradient-to-r from-black rounded-xl p-4 to-black' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo3} />
                    </div>
                </div>
                <p className='text-white font-bold text-xl'>Personalize It</p>
                <p className='text-white text-sm'>Engrave your device with your <br/> name or a personal note.</p>
            </div>

           
        </div>
    );
};

export default Services;