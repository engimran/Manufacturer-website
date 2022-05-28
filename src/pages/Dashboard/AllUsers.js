import React, { useEffect, useState } from 'react';
import Users from './Users';

const AllUsers = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    return (
        <div>
            <h1>All users pages: {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Total value</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <Users
                                key={user._id}
                                user={user}
                            ></Users>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;