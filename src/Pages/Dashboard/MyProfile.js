import React, { useEffect, useState } from 'react';
import UpdatedProfile from './UpdatedProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [profiles, SetProfiles] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user);
    console.log(profiles);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user/${user.email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => SetProfiles(data))
        }
    }, [user])

    return (
        <div>
            <UpdatedProfile
                profiles={profiles} >
            </UpdatedProfile>
        </div>
    );
};

export default MyProfile;