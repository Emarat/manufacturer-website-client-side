import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({ tool }) => {
    const { _id, name, img, description, available, Uprice, Mqty } = tool;

    const navigate = useNavigate();
    const navigateToPurchasePage = (_id) => {
        navigate(`/purchase/${_id}`)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h4 className='font-semibold'>Quantity: {available} Piece</h4>
                <h4 className='font-semibold'>Unit Price: {Uprice}</h4>
                <div className=" text-center ">
                    <button onClick={() => navigateToPurchasePage(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tools;