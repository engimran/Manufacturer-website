import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`https://arcane-tundra-12894.herokuapp.com/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    }, [user])

    return (
        <div>
            <h2>My orders:{orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl.No.</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Total value</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.orderName}</td>
                                <td>{order.orderQty}</td>
                                <td>{order.orderPrice}</td>
                                <td><button className='btn btn-secondary'>Paid</button> <button disabled className='btn btn-secondary'>Unpaid</button><button className='btn btn-primary'>Delete</button></td>
                                <td></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;