
import React, { useState, useEffect } from 'react';
import {  } from '../../Service/Cruds';
import { isUserLoggedIn } from '../../Service/WindowAuthentication';
import './All_user_screen.css'

import {} from '../../Model/Model'



export default function All_user_screen() {


    const [alluser, setAlluser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    
            const fetchData = async () => {
                try {
                    // const data = await getAllUser_detail(localStorage.getItem('user').substring(5));
                     setAlluser([{"gwee":"wge"},{"tyryey":"yeyey"}]);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                }
            };
    
            const timer = setTimeout(() => {
                fetchData();
            }, 6000);
        
            return () => clearTimeout(timer);
}, []);


    return (
        <div className='user_container'>
            <div className='User_table_container'>
            <div className='User_table_container_body'>
            <div className='user_header'>
                <div className='user_table_header_item_list'>
                
                <div className='user_header_item'>ID</div>
                <div className='user_header_item'>Name</div>
                <div className='user_header_item'>Email</div>
                <div className='user_header_item'>Phone</div>
              
                <div className='user_header_item'>Status</div>
                <div className='user_header_item'>Action</div>
                </div>
            </div>
            <div className='user_body'>
                {alluser.map((item, index) => (
                        <div className='user_body_item_list' key={index}>
                        <div className='user_body_item item_id'>item.id</div>
                        <div className='user_body_item item_name'>item.name</div>
                        <div className='user_body_item item_email'>item.email</div>
                        <div className='user_body_item item_phone'>item.phone</div>
                        
                        <div className='user_body_item item_status'>item.status</div>
                        <div className='user_body_item item_action'>
                            <button className='user_body_item edit_action_button'>Edit</button>
                            <button className='user_body_item delete_action_button'>Delete</button>    
                        </div>
                    </div>
                ))}
                </div>
        </div>
        </div>


        </div>
    );
}