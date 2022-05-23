import React from 'react';

const BusinessSummery = () => {
    return (
        <>

            <h2 className='m-14 text-center text-xl font-semibold divider'>Business Summery</h2>
            <div className='text-center'>
                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#cbcbcb" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                        </div>
                        <div className="stat-title">Countries</div>
                        <div className="stat-value text-primary">65+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d2d2d2" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value text-secondary">1200+</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d2d2d2" stroke-width="2" stroke-linecap="square" stroke-linejoin="arcs"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        </div>
                        <div className="stat-title">Feedbacks</div>
                        <div className="stat-value">990+</div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessSummery;