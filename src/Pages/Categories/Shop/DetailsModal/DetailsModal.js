import React from 'react';

const DetailsModal = ({ item, setItem }) => {
    const { _id, price, brand, title, seller, img, benefits } = item

    const handleDisplay = () => {
        setItem(null)
    }

    return (
        <div className='text-black w-full '>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className=" modal-box w-11/12 max-w-5xl">
                    <label onClick={() => handleDisplay()} htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={img} className="w-auto mx-auto mt-6" alt='product' />
                    <h3 className="text-2xl  pt-10 font-bold">{title}</h3>
                    <h3 className="text-xl  pt-2 font-semibold">Product Category: {brand}</h3>
                    <h3 className="text-xl  pt-2 font-semibold">Price: ${price}</h3>
                    <h3 className="text-xl  pt-10 pb-5 font-semibold">About this item:  </h3>
                    <p>1. {benefits.p1}</p>
                    <p>2. {benefits.p2}</p>
                    <p>3. {benefits.p3}</p>
                    <p>4. {benefits.p4}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;