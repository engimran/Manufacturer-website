import React from 'react';

const OrderModal = ({ order, setOrder }) => {
    const { name, price } = order;

    const handleOrder = event => {
        event.preventDefault();
        const name = event.target.name.value;
        setOrder(null);

    }
    return (
        <div>
            <input type="checkbox" id="order-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Product Name:{name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4 justify-items-center '>
                        <input type="text" name='name' value={price} class="input w-full max-w-xs" />
                        <input type="text" email='email' placeholder="Type here" class="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input w-full max-w-xs" />
                        <input type="submit" value="Submit" class="input w-full max-w-xs btn btn-secondary" />
                    </form>

                    <label for="order-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>

        </div>
    );
};

export default OrderModal;