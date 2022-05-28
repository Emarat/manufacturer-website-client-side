import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile mt-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><h2 className='text-3xl font-bold text-center'>DASHBOARD</h2></li>
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/profile'>My Profile</Link></li>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;