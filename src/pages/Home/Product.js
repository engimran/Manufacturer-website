import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';


const Product = ({ product, setOrder }) => {
    const { name, img, description, price, _id } = product;
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();
    if (loading) {
        return <button className="btn btn-square loading"></button>
    }

    const handleOrderPlace = id => {

        if (user) {
            setOrder(id)
        }
        else {
            navigate('/login')
        }

    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='p-3' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Description: </span>{description}</p>
                <p><span className='font-bold'>Unit Price: </span> {price}</p>

                <div className="card-actions justify-end">

                    <span><label for="order-modal" onClick={() => handleOrderPlace(_id)}
                        className="btn btn-primary font-bold">Place Order</label></span>

                </div>
            </div>
        </div>
    );
};

export default Product;