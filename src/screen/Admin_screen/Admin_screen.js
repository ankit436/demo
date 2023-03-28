import React from "react";
import "./Admin_screen.css";
import { useState, useEffect } from "react";
import { getAllPendingApprovalByid, getAllapprovedclient } from "../../Service/Cruds";
import {isUserLoggedIn } from  "../../Service/WindowAuthentication"
import {admin_request} from "../../Model/Model"

export default function Admin_screen() {

    const [adminData, setAdminData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getAllPendingApprovalByid(localStorage.getItem('user').substring(5));
               setAdminData(data==null?[]:data);

            
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        };

        const timer = setTimeout(() => {
            fetchData();
          }, 6000);
      
        return () => clearTimeout(timer);
    }, [adminData]);

    const Approved =(item)=>{

      console.log(item[admin_request[5].name])
      item[admin_request[5].name]="aceess"
      const newstate=adminData;
      const index= adminData.findIndex((i)=>i[admin_request[8].name]===item[admin_request[8].name])
      newstate[index]=item;
      setAdminData(newstate)
    }

  return (
    <div className="Admin_container">
      <div className="Admin_header">
        <div className="Admin_header_Navbar">Admin</div>

      </div>
      <div className="Admin_permission_table">
        <div className="Admin_permission_body">
          <div className="Admin_permission_table_header">
            <div className="Admin_permission_table_header_item">ID</div>
            <div className="Admin_permission_table_header_item">Request by</div>
            <div className="Admin_permission_table_header_item">Email</div>
            <div className="Admin_permission_table_header_item">Priority</div>
            <div className="Admin_permission_table_header_item">Status</div>
            <div className="Admin_permission_table_header_item">
              Created Date
            </div>
            <div className="Admin_permission_table_header_item">
              Description
            </div>
            <div className="Admin_permission_table_header_item">Action</div>
          </div>
            {adminData.length>0&&adminData.map((item ,index) => {
                return (
                    <div key={index} className="Admin_permission_table_body">
                        <div className="Admin_permission_table_body_item">{item[admin_request[0].name]}</div>
                        <div className="Admin_permission_table_body_item">
                            <div className="user_icon_with_Name">
                                <div className="user_icon"></div>
                                <span className="user_name">{item[admin_request[1].name]}</span>
                            </div>
                        </div>
                        <div className="Admin_permission_table_body_item">
                        {item[admin_request[2].name]}
                        </div>
                        <div className="Admin_permission_table_body_item">{item[admin_request[3].name]}</div>
                        <div className="Admin_permission_table_body_item">{item[admin_request[4].name]}</div>
                        <div className="Admin_permission_table_body_item">{item[admin_request[5].name]}</div>
                        <div className="Admin_permission_table_body_item">
                        {item[admin_request[6].name]}
                        </div>
                        <div className="Admin_permission_table_body_item">
                        <div className="Admin_permission_table_body_item">
                        <div className='Permission_button'>
                            <button className='button Approve_button' onClick={()=>Approved(item)}  >Access</button>
                            <button className='button Reject_button'>Reject</button>
                        </div>
                    </div>
                        </div>
                    </div>
                );


            })
        }

        </div>
      </div>
    </div>
  );
}

{/* <div className="Admin_permission_table_body_item">
                        <div className='Permission_button'>
                            <button className='button Approve_button'>Access</button>
                            <button className='button Reject_button'>Reject</button>
                        </div>
                    </div> */}
