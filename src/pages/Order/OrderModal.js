import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const OrderModal = ({ order, setOrder }) => {
    const { _id, name, price, img, quantity } = order;
    const [user, loading, error] = useAuthState(auth);


    const handleOrder = event => {
        event.preventDefault();


        const order = {
            orderId: _id,
            orderName: name,
            orderPrice: price,
            orderQty: quantity,
            phone: event.target.phone.value,
            email: user.email,
            userName: user.displayName

        };

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                setOrder(null);
            })


    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='grid justify-center items-center'>
                        <img className='w-48' src={img} alt="" />

                    </div>


                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center '>
                        <h3 className="font-bold  text-lg">Product Name:{name}</h3>
                        <input type="text" disabled value={user?.displayName} className="input w-full max-w-xs" />
                        <input type="text" email='email' disabled value={user?.email} className="input w-full max-w-xs" />
                        <label className=''>Available Quantity</label>
                        <input type="text" value={quantity} className="input w-full max-w-xs" />
                        <label className=''>Unit Price</label>
                        <input type="text" name='price' value={price} className="input w-full max-w-xs" />
                        <label className=''>Order Quantity</label>
                        <input type="text" name='quantity' className="input w-full max-w-xs" />
                        <label className=''>Phone Number</label>
                        <input type="text" name='phone' placeholder="Type here phone number" className="input w-full max-w-xs" />
                        <input type="submit" value="Submit" className="input w-full max-w-xs btn btn-secondary" />
                    </form>

                    <label for="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>

        </div>
    );
};

export default OrderModal;