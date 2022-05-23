import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Review from './Review';

const AddReview = () => {
    const [reviews, setReviews] = useState({});
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setReviews(data);
    // console.log(reviews);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("comment here")} /> <br></br>
                <input type="submit" />
            </form>
        </>
    );
};

export default AddReview;