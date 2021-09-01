import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const {friendID} = useParams();
    const [friend, setFriend] = useState({});
    //useState a default value hisebe ki pabo setar upor base kore []/{} dite hobe.

    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <p>This is friend detail component: {friendID}</p>
            <h3>{friend.name}</h3>
            <p>email: {friend.email}</p>
            <p>phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;