import React from 'react';
import auth from '../../firebase.init';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';

const UserProfile = () => {
    const [user] = useAuthState(auth)
    const [updateProfile] = useUpdateProfile(auth);

    const handleUpdate = async (event) => {
        event.preventDefault()
        await updateProfile({ displayName: event.target.name.value });
        alert('Updated profile');
    }


    return (
        <>
            <h1 className='text-xl font-bold text-primary ml-10 mt-5'> User Profile</h1>
            <form onSubmit={handleUpdate}>
                <div className='form-control'>
                    <div className="input-group mb-5 mt-5">
                        <span>Name</span>
                        <input name='name' type="text" defaultValue={user.displayName} class="input input-bordered" />
                    </div>
                    <div className="input-group mb-5">
                        <span>Email</span>
                        <input type="text" defaultValue={user.email} class="input input-bordered" />

                    </div>
                    <button type='submit' className="btn btn-secondary w-48 ml-5">Update</button>
                </div>
            </form>
        </>


    );
};

export default UserProfile;