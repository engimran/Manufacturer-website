import React, { useEffect, useState } from 'react';
import OrderModal from '../Order/OrderModal';
import Product from './Product';

const OurProducts = () => {

    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
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
                        setOrder={setOrder}
                    ></Product>)
                }
            </div>
            {order &&
                <OrderModal
                    order={order}
                    setOrder={setOrder}></OrderModal>}

        </div>
    );
};

export default OurProducts;