import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { handleSubmit, register } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = (data) => {
        const { name, email, address, university, department } = data;
        console.log(data);
        // const email = data.email;
        const currentUser = { email: email, name: name, address: address, university: university, department: department };
        const url = `http://localhost:5000/user/${email}`;
        if (email)
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    toast("Profile Updated");
                })

    }
    return (
        <div className='flex justify-center items-center m-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-semibold'>UPDATE PROFILE</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                // value={user.displayName}
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
                                // value={user.email}
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
                                className="input input-bordered w-full max-w-xs"
                                {...register("address")}
                            />
                        </div>
                        <ToastContainer />
                        <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;