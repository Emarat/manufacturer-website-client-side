import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log(orders);

    useEffect(() => {

        fetch(`https://dry-caverns-89338.herokuapp.com/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            });

    }, []);

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

    const shippedItem = (id) => {
        const url = `https://dry-caverns-89338.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Successfully Shipped');
            })
    }

    return (
        <div>
            <h2>Total Orders: {orders.length}</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <th>{order.name}</th>
                                    <th>{order.email}</th>
                                    <td>{order.product}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) &&
                                            <span className=" text-success">Unpaid</span>}
                                        {(order.price && order.paid) && <span className=" text-success">Paid</span>}
                                    </td>
                                    <td>
                                        {(order.price && !order.paid) &&
                                            <button onClick={() => deleteItem(order._id)} className="btn btn-success btn-xs">Cancel</button>}
                                        <ToastContainer />
                                        {(order.price && order.paid) &&
                                            <button onClick={() => shippedItem(order._id)} className="btn btn-success btn-xs">Shipped</button>}
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;