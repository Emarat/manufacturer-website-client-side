import React, { useState } from 'react';
import UpdatedProfile from './UpdatedProfile';


const MyProfile = () => {
    const [profiles, SetProfiles] = useState([]);
    useState(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => SetProfiles(data))
    }, [])

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