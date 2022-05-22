import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/YW62Jj6/slider2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Better Tools. Better World!</h1>
                    <p className="py-6">Providing superior products to users worldwide through continuous innovation, we are determined to become a global leader in power tools and outdoor power equipment in the lithium-ion, intelligent and digital era.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;