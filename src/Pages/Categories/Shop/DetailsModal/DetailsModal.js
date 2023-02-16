import React from 'react';

const DetailsModal = ({phone}) => {
    const { _id, price, brand, title, seller, img } = phone
    return (
        <div className='text-white '>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative bg-primary">
                    <label htmlFor="details-modal" className="btn bg-warning btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl text-center pt-10 font-bold">PRODUCT DETAILS</h3>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;