import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://dry-caverns-89338.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })

                .then(data => {
                    setOrders(data)
                });
        }
    }, [user]);

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Cancel?')
        if (proceed) {
            const url = `https://dry-caverns-89338.herokuapp.com/order/${id}`;
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
                            <th>Status</th>
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
                                            <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-success btn-xs">Pay</button></Link>}
                                        {(order.price && !order.paid) &&
                                            <button onClick={() => deleteItem(order._id)} className="btn btn-success btn-xs">Cancel</button>}
                                        {(order.price && order.paid) && <span className=" text-success">Paid</span>}
                                    </th>
                                    <th>
                                        {(order.price && order.status) && <span className=" text-success">Shipped</span>}
                                        {(order.paid && !order.status) && <span className=" text-success">Pending</span>}
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