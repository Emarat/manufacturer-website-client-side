import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`https://dry-caverns-89338.herokuapp.com/tools`, {
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
                setProducts(data)
            });
    }, []);

    const deleteItem = (id) => {
        const proceed = window.confirm('Are You Sure You Want To Cancel?')
        if (proceed) {
            const url = `https://dry-caverns-89338.herokuapp.com/tools/${id}`;
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
            <h2>Total Products: {products.length}</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={order.img} alt="product image" />
                                        </div>
                                    </td>
                                    <td>{order.name}</td>
                                    <td>{order.available}</td>
                                    <td>{order.Uprice}</td>
                                    <th>
                                        <button onClick={() => deleteItem(order._id)} className="btn btn-success btn-xs">Delete</button>
                                    </th>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;