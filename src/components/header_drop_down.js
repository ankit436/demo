




import React from 'react';
import { useState, useRef } from "react";

import { Link } from "react-router-dom";



export function JobNavbar(){
    return <h1>This JobNavbar</h1>
}


export function AdminNavbar(){
    return <div className='header_dropdown_container'>
        <div className="header_dropdown_item">
            <ul className="header_tab_list unstyled">
            <Link to="/admin/users" className="Nav_link" ><li className="header_tab_item_styled dropdown_unstyled" >Users </li></Link>
            <Link to="/admin/users" className="Nav_link" ><li className="header_tab_item_styled dropdown_unstyled" >Pending Approval </li></Link>
            </ul>
        </div>

    

    </div>
}


export function DashboardNavbar(){
    return <h1>This Dashboard</h1>
}



export function ClientNavbar(){
    return <h1>This client</h1>
}



export function FreelancerNavbar(){
    return <h1>This frelancer</h1>
}