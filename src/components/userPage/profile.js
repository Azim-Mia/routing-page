import React from 'react';
import {useLocation} from 'react-router-dom';
const Profile = ()=>{
const {state} =useLocation();
    return <div><h3>{state.name}</h3>
    <p>{state.permanentAddresss}</p>
    </div>
}
export default Profile;