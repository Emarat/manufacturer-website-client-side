import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><h2 className='text-3xl font-bold text-center'>DASHBOARD</h2></li>
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {!admin && <li><Link to='/dashboard/orders'>My Orders</Link></li>}
                    {!admin && <li><Link to='/dashboard/addreview'>Add Review</Link></li>}
                    {admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/addProducts">Add Products</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;