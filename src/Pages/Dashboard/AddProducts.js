import React from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const AddProducts = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const url = 'https://dry-caverns-89338.herokuapp.com/tool';
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
                toast("Product Added");
            })
    }
    return (
        <>

            <div className='flex justify-center items-center m-10'>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className='text-xl font-semibold mt-12 text-center'>ADD PRODUCTS</h2>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Enter Product Name'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    type="email"
                                    placeholder='Enter Description'
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("description")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("available")}
                                    required
                                />

                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Minimum Order Quantity</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Quantity"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("Mqty")}
                                    required
                                />

                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Price"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("uprice")}
                                    required
                                />

                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Image Url"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("img")}
                                />

                            </div>
                            <ToastContainer />
                            <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="SUBMIT" />
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddProducts;