import React from 'react';

const Reviews = ({ review }) => {
    const { rating, comment } = review;

    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="card-actions justify-end">
                        <button class="btn gap-2">
                            Rating
                            <div class="badge badge-secondary">{rating}/5</div>
                        </button>
                    </div>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;