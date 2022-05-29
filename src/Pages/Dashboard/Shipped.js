import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Shipped = ({ order, refetch, index }) => {
    const { email, paid, name, product, available, Mqty, Uprice } = order;

    const shipItem = () => {
        fetch(`https://dry-caverns-89338.herokuapp.com/order/shipped/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Shipped Failed');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully Shipped`);
                };

            })
    }

    return (
        <div>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{product}</td>
                <td>{available}</td>
                <td>{Uprice}</td>
                <ToastContainer />
                <td>{paid && <button onClick={shipItem} className="btn btn-xs">Shipped</button>}</td>
                <td><button className="btn btn-xs">Remove User</button></td>
            </tr>
        </div>
    );
};

export default Shipped;