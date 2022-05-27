import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    return (
        <div>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                <th>
                                    <button class="btn btn-ghost btn-xs">Pay</button>
                                    <button class="btn btn-ghost btn-xs">Cancel</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;