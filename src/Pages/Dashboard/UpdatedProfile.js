import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';

const UpdatedProfile = ({ profile }) => {
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
                                    value={profile.name}
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
                                    value={profile.email}
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
                                    value={profile.university}
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
                                    value={profile.department}
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
                                    value={profile.address}
                                    className="input input-bordered w-full max-w-xs"
                                    readOnly

                                />
                            </div>
                            <Link to='/updateProfile'>
                                <button className="btn btn-outline mt-2"> Update </button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdatedProfile;