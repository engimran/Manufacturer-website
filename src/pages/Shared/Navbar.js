import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/home')
    };
    return (
        <div className="navbar bg-primary sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-accent">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                        <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li>

                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl font-bold text-accent">Technology Holdings</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold text-accent">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    {user && <li><Link to='/dashboard'>Dashboard</Link></li>}
                    <li>{user ? <button onClick={logout} className="btn btn-ghost">Sign Out</button> : <Link to='/login'>Login</Link>}</li>
                </ul>
            </div>
            <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

        </div>
    );
};

export default Navbar;