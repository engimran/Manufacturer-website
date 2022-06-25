import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LBAjZABePCjlqMNyNPKcysE1B8yDtnbtnKvInN1NDf0Yb87oZ01kWBluT3oehgrtYm24cBddzWpg3SX3AXDdISS009UpVQEfM');
const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/order/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))

    }, [])




    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Product Name:{order.orderName}</p>
                    <p>Order Qty: <span className='text-orange-700'>{order.orderQty}</span></p>
                    <p>Please pay: ${order.orderPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;