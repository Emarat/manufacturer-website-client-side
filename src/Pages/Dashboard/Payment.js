import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../Shared/Loading';

const stripePromise = loadStripe('pk_test_51L4AFeAWqxpcKk5l2R7M27x1EKrx0B6J66BaNublPjRIhjua1B0j7IMGOHQZalS5uCrv7nwkzUIqDJKgCIqSoZ2700BfvN09b1');

const Payment = () => {
    const { id } = useParams();
    const [orders, setOrders] = useState([]);

    const url = `https://dry-caverns-89338.herokuapp.com/order/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div >
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 ">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {orders.name}</p>
                    <h2 className="card-title">Please Pay for, {orders.product}</h2>
                    <p>Pay: ${orders.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 text-white">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orders={orders} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;