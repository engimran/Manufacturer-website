import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../../hooks/UseAdmin';
import Footer from '../Shared/Footer';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = UseAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h2 className='font-bold text-4xl text-secondary'>Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    <li><Link to='/dashboard/userprofile'>User Profile</Link></li>
                    {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                    {admin && <li><Link to='/dashboard/addproduct'>Add Product</Link></li>}

                </ul>

            </div>

        </div>
    );
};

export default Dashboard;