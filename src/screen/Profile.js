

import React from 'react';
import './profile.css';
import {getuser_role} from '../Service/Cruds'
import Newuser from '../../src/components/newuser';

export default function Profile() {
    
    console.log(getuser_role());

    return getuser_role()!=null?(   
        <div className="profile_container">
            <h1>Profile</h1>
            </div>
     ):(<Newuser/>)
}