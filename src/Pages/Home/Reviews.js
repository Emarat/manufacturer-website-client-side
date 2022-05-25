import React from 'react';

const Reviews = ({ review }) => {
    const { rating, comment } = review;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <button className="btn gap-2">
                            Rating
                            <div className="badge badge-secondary">{rating}/5</div>
                        </button>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;