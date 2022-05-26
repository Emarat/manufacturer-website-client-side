import React, { useEffect, useState } from 'react';
import UpdatedProfile from './UpdatedProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [profiles, SetProfiles] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/user?email=${user.email}`)
                .then(res => res.json())
                .then(data => SetProfiles(data))
        }
    }, [user])

    return (
        <div>
            {
                profiles.map(profile =>
                    <UpdatedProfile
                        key={profile._id}
                        profile={profile}
                    ></UpdatedProfile>
                )
            }
        </div>
    );
};

export default MyProfile;