import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
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
    }, [user]);

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Cancel?')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('Deleted');
                })
        }
        window.location.reload(false);
    };

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
                            <th>TransactionID</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>{order.transactionId}</td>
                                    <th>
                                        {(order.price && !order.paid) &&
                                            <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-success btn-xs">Pay</button></Link>} <br />
                                        {(order.price && !order.paid) &&
                                            <button onClick={() => deleteItem(order._id)} className="btn btn-success btn-xs">Cancel</button>}
                                        {(order.price && order.paid) && <span className=" text-success">Paid</span>}
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