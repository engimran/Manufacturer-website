import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='mt-10 mb-5'>
            <h1 className='text-center font-bold text-accent text-3xl mb-10'>Client Reviews</h1>
            {
                reviews.map(review =>
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=92310" alt='' />
                        </div>
                        <h1>{review.name}</h1>
                        <h1>{review.comments}</h1>
                    </div>)
            }

        </div>
    );
};

export default Review;