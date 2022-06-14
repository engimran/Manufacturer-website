import React from 'react';

const AddProduct = () => {

    const addProduct = event => {
        event.preventDefault();
        const product = {
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            description: event.target.description.value,
            img: event.target.img.value
        };
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }

    return (
        <div>
            <form onSubmit={addProduct} className='flex grid grid-cols-1 m-4 justify-item-center'>
                <h4 className='m-3 font-bold'>Add Product</h4>
                <input name='name' type="text" placeholder="Product Name" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input name='price' type="text" placeholder="Price" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input name='quantity' type="text" placeholder="Quantiy" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input name='description' type="text" placeholder="Description" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input name='img' type="text" placeholder="Image URL" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input className='btn btn-secondary input-sm w-full max-w-xs m-3 ' type="submit" value="Add Product" />
            </form>

        </div>
    );
};

export default AddProduct;