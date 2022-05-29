import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const url = 'https://dry-caverns-89338.herokuapp.com/review';
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
                toast("Review Submitted");
            })
    }

    return (
        <>
            <h2 className='text-center text-2xl font-semibold mt-5'>ADD A REVIEW</h2>
            <div className='flex justify-center items-center m-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Rating</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Rating Between 1 To 5"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("rating")}
                                    required
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Comment</span>
                                </label>
                                <textarea
                                    type="text"
                                    placeholder="Comment Here"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("comment")}
                                    required
                                />
                            </div>
                            <ToastContainer />
                            <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddReview;