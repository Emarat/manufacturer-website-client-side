import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRow = ({ user, refetch, index }) => {
    const { email, role, name } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                };

            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <ToastContainer />
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow; 