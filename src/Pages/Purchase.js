import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h2 className='text-xl font-semibold mt-12 divider'>PURCHASE TOOL</h2>
            <div className="card w-96 bg-base-100 shadow-xl m-12">
                <figure className="px-10 pt-10">
                    <img src={item.img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                    <h4 className='font-semibold'>Available Item: {item.available} Piece</h4>
                    <h4 className='font-semibold'>Minimum Order Quantity: {item.Mqty} Piece</h4>
                    <h4 className='font-semibold'>Unit Price: {item.Uprice}</h4>
                </div>
            </div>
        </div>
    );
};

export default Purchase;