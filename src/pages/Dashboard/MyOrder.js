import { OAuthProvider } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
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
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.orderName}</td>
                                <td>{order.orderQty}</td>
                                <td>{order.orderPrice}</td>
                                <td>
                                    {(order.orderPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id} `}> <button className='btn btn-primary'>Pay</button> </Link>}
                                    {(order.orderPrice && order.paid) &&
                                        <div>
                                            <p>Paid</p>
                                            <p>Transaction Id:{order.transaction}</p>
                                        </div>
                                    }
                                </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrder;