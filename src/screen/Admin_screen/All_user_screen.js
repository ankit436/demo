import React, { useState, useEffect } from 'react';
import { getAllUser_detail,update_profile_data,Delete_profile_data } from '../../Service/Cruds';
import { isUserLoggedIn } from '../../Service/WindowAuthentication';
import './All_user_screen.css'

import {Profile_detail} from '../../Model/Model'



export default function All_user_screen() {


    const [alluser, setAlluser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
    
            const fetchData = async () => {
                try {
                     const data = await getAllUser_detail(localStorage.getItem('user').substring(5));
                     setAlluser(data==null?[]:data);
                     console.log(data);
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


const edit_profile = async (item)=>{

    
    var response = await update_profile_data(localStorage.getItem('user').substring(5),item);
    if (response != null) {
        const newstate = [...alluser];
        const index = alluser.findIndex(
          (i) => i[Profile_detail[0].name] === item[Profile_detail[0].name]
        );
        newstate[index] = item;
        setAlluser(newstate);
      }
}

const Delete_user_profile = async (item)=>{

    var response = await Delete_profile_data(localStorage.getItem('user').substring(5),item);
    if (response != null) {
        const newstate = [...alluser];
        const index = alluser.findIndex(
          (i) => i[Profile_detail[0].name] === item[Profile_detail[0].name]
        );
        newstate[index] = item;
        setAlluser(newstate);
      }
}
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
              
                <div className='user_header_item'>Role</div>
                <div className='user_header_item'>Action</div>
                </div>
            </div>
            <div className='user_body'>
                {alluser.map((item, index) => (
                        <div className='user_body_item_list' key={index}>
                        <div className='user_body_item item_id'>{item[Profile_detail[0].name]}</div>
                        <div className='user_body_item item_name'>{item[Profile_detail[1].name]}</div>
                        <div className='user_body_item item_email'>{item[Profile_detail[2].name]}</div>
                        <div className='user_body_item item_phone'>{item[Profile_detail[3].name]}</div>
                        
                        <div className='user_body_item item_status'>{item[Profile_detail[4].name]}</div>
                        <div className='user_body_item item_action'>
                            <button className='user_body_item edit_action_button' onClick={()=>edit_profile(item)}>Edit</button>
                            <button className='user_body_item delete_action_button' onClick={()=>Delete_user_profile(item)}>Delete</button>    
                        </div>
                    </div>
                ))}
                </div>
        </div>
        </div>


        </div>
    );
}
