import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Purchase = () => {
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const { id } = useParams();
    const [item, setItem] = useState('');

    // console.log(item.name);

    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://dry-caverns-89338.herokuapp.com/tools/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])


    const Qty = watch("quantity");
    const price = parseInt(item.Uprice * Qty).toString();
    // console.log(price);




    const onSubmit = (data) => {
        data.price = price;
        console.log(data);
        const url = 'https://dry-caverns-89338.herokuapp.com/order';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Order Placed");
            })
    }
    return (
        <>
            <h2 className='text-xl font-semibold mt-12 divider'>PURCHASE TOOL</h2>
            <div className='flex h-screen justify-center items-center m-12 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl min-h-min">
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
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={user.displayName}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address")}
                                    required
                                />

                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Product Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("product")}
                                    required
                                />

                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="number"
                                    defaultValue={item.Mqty}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("quantity", { min: 10, max: 500 })}
                                />
                                {errors.quantity && "Quantity must be 10 or more & Less or equal to 500"}
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    value={price}
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("price")}
                                />
                            </div>
                            <ToastContainer />
                            <input disabled={errors.quantity < 'min' || errors.quantity > 'max'} className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;