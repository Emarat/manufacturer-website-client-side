import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const Review = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // const reviews = [
    //     {
    //         _id: '1',
    //         "rating": "5",
    //         "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi."
    //     },
    //     {
    //         _id: '2',
    //         "rating": "4",
    //         "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi."
    //     },
    //     {
    //         _id: '3',
    //         "rating": "5",
    //         "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi."
    //     },
    // ]
    return (
        <>
            <h2 className='mt-14 text-xl font-semibold divider'>CUSTOMER REVIEWS</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </>
    );
};

export default Review;