import React from 'react';

const UserRow = ({ user, index }) => {
    const { email, name, address } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
        </tr>
    );
};

export default UserRow; 