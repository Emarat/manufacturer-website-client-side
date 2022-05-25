import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const MyProfile = () => {
    const { handleSubmit, register } = useForm();
    const [user] = useAuthState(auth);


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>

            <div className='flex justify-center items-center m-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-semibold'>MY PROFILE</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={user.displayName}
                                    placeholder="Enter Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name")}
                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={user.email}
                                    placeholder=" Enter Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">University</span>
                                </label>
                                <input
                                    type="text"
                                    // value={user.email}
                                    placeholder=" Enter Your University Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("university")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Department</span>
                                </label>
                                <input
                                    type="text"
                                    // value={user.email}
                                    placeholder=" Department Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("department")}
                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    // value={user.email}
                                    placeholder=" Enter Your Address"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("address")}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyProfile;