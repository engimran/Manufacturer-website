import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-accent text-3xl'>Business Summary</h1>

            <div className='flex grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/BcYDmdJ/world.jpg?w=400&h=225" alt="world" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">More than 45 Countries Covered</h2>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/GJPqmjh/people.webp?w=400&h=225" alt="people" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">125+ Clients</h2>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CP6f8gq/revinew.jpg?w=400&h=225" alt="world" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Revenue Growth Rate 30%</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;