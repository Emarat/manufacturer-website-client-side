import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';

const UpdatedProfile = ({ profiles }) => {
    // console.log(profile);
    // const [user] = useAuthState(auth);

    return (
        <>

            <div className='flex justify-center items-center m-12'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className='text-center text-2xl font-semibold'>MY PROFILE</h2>
                        <form>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={profiles.name}
                                    // placeholder="Enter Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>

                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    value={profiles.email}
                                    // placeholder=" Enter Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">University</span>
                                </label>
                                <input
                                    type="text"
                                    value={profiles.university}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Department</span>
                                </label>
                                <input
                                    type="text"
                                    value={profiles.department}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>
                            <div className="form-control w-full max-w-xs mt-2">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    value={profiles.address}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>
                            <div className='text-center mt-5'>
                                <Link to='/updateProfile'>
                                    <button className="btn btn-outline "> Update </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdatedProfile;