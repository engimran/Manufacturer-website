import React from 'react';

const Product = ({ product, setOrder }) => {
    const { name, img, description, price, quantity } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='p-3' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-bold'>Description: </span>{description}</p>
                <p><span className='font-bold'>Unit Price: </span> {price}</p>

                <div className="card-actions justify-end">

                    <label for="order-modal" onClick={() => setOrder(product)}
                        class="btn btn-primary font-bold">Place Order</label>

                </div>
            </div>
        </div>
    );
};

export default Product;