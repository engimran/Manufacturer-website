import React from 'react';

const Product = ({ product }) => {
    const { name, img } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='p-3' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Unit Price:</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default Product;