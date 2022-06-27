import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Navigate } from 'react-router';

const UserProfile = () => {
    const [user] = useAuthState(auth)


    return (
        <>
            <h1 className='text-xl font-bold text-primary ml-10 mt-5'> User Profile</h1>

            <div className='form-control'>
                <div className="input-group mb-5 mt-5">
                    <span>Name</span>
                    <input type="text" value={user.displayName} class="input input-bordered" />
                </div>
                <div className="input-group mb-5">
                    <span>Email</span>
                    <input type="text" value={user.email} class="input input-bordered" />
                </div>
                <button className="btn btn-secondary w-48 ml-5">Update</button>
            </div>
        </>


    );
};

export default UserProfile;