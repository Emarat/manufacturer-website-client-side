import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='flex justify-center items-center m-12'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className='text-center text-2xl font-semibold'>MY PORTFOLIO</h2>
                    <form >

                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value="MD.EMARAT HOSSAIN"
                                placeholder="Enter Your Name"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>

                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                value="emarathossain00@gmail.com"
                                placeholder=" Enter Your Email"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">University</span>
                            </label>
                            <input
                                type="text"
                                value="City Universuty"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">Department</span>
                            </label>
                            <input
                                type="text"
                                value="Computer Science & Engineering"
                                className="input input-bordered w-full max-w-xs"

                            />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input
                                type="text"
                                value="Dhaka, Bangladesh"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs mt-2">
                            <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                                <div class="collapse-title text-xl font-medium">
                                    Projects
                                </div>
                                <div class="collapse-content">
                                    <p>
                                        <li><a>https://dentario-b2d32.web.app/</a></li>
                                        <li><a>https://fruitswarehouse-44b5a.web.app/</a></li>
                                        <li><a>https://ama-john.netlify.app/</a></li>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs mt-2">

                            {/* <!-- The button to open modal --> */}
                            <label htmlFor="my-modal-6" class="btn modal-button">Skills</label>

                            {/* <!-- Put this part before </body> tag --> */}
                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>HTML5</a></li>
                                        <li><a>CSS</a></li>
                                        <li><a>BOOTSTRAP</a></li>
                                        <li><a>TAILWIND</a></li>
                                        <li><a>JAVASCRIPT</a></li>
                                        <li><a>REACT JS</a></li>
                                        <li><a>NODE JS</a></li>
                                        <li><a>EXPRESS JS</a></li>
                                        <li><a>MONGODB</a></li>
                                        <li><a>GITHUB</a></li>
                                    </ul>

                                    <div class="modal-action">
                                        <label htmlFor="my-modal-6" class="btn">X</label>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </form>
                </div>
            </div >
        </div >
    );
};

export default MyPortfolio;