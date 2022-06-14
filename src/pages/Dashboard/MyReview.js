import React from 'react';

const MyReview = () => {

    const addReview = event => {
        event.preventDefault();
        const review = {
            name: event.target.name.value,
            comments: event.target.comment.value,
        };
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }

    return (
        <div>
            <form onSubmit={addReview} className='flex grid grid-cols-1 m-4 justify-item-center'>
                <h4 className='m-3 font-bold'>Review</h4>
                <input name='name' type="text" placeholder="Name" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input name='comment' type="text" placeholder="Comment" className="input input-bordered input-sm w-full max-w-xs m-3" />
                <input className='btn btn-secondary input-sm w-full max-w-xs m-3 ' type="submit" value="Post Review" />
            </form>

        </div>
    );
};

export default MyReview;