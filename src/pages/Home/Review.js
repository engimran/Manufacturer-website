import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-eyrie-61181.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='mt-5'>
            <h1 className='text-black text-center font-bold'>Client Reviews</h1>
            {
                reviews.map(review => <div class="avatar">
                    <div class="w-24 rounded-full">
                        <h1>{review.product}</h1>
                        <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                    </div>
                </div>)
            }

        </div>
    );
};

export default Review;