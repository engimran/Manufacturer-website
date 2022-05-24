import React from 'react';

const Product = ({ product }) => {
    const { name, img } = product;
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='p-3' src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>Unit Price:</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Product;