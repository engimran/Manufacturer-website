import React, { useEffect, useState } from 'react';
import Product from '../Product';

const OurProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <h2>Our Products</h2>
            <div className='flex grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>


        </div>
    );
};

export default OurProducts;