import React from 'react';
import { toast } from 'react-toastify';

const Users = ({ user, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Successul')
            })
    }
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-secondary'>Make Admin</button>}</td>

        </tr>

    );
};

export default Users;