import React from "react";
import "./Admin_screen.css";
import { useState, useEffect } from "react";
import { getAllPendingApprovalByid, getAllapprovedclient } from "../../Service/Cruds";
import {isUserLoggedIn } from  "../../Service/WindowAuthentication"

export default function Admin_screen() {

    const [adminData, setAdminData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getAllPendingApprovalByid(isUserLoggedIn());
               setAdminData(data);
            
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


  return (
    <div className="Admin_container">
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
          <div className="Admin_permission_table_body">
            <div className="Admin_permission_table_body_item">1</div>
            <div className="Admin_permission_table_body_item">
              <div className="user_icon_with_Name">
                <div className="user_icon"></div>
                <span className="user_name">Ankit</span>
              </div>
            </div>
            <div className="Admin_permission_table_body_item">
              ankitkumar700413.com
            </div>
            <div className="Admin_permission_table_body_item">High</div>
            <div className="Admin_permission_table_body_item">open</div>
            <div className="Admin_permission_table_body_item">276532532</div>
            <div className="Admin_permission_table_body_item">
              Client Approval
            </div>
            <div className="Admin_permission_table_body_item">
            <div className='Permission_button'>
                            <button className='button Approve_button'>Access</button>
                            <button className='button Reject_button'>Reject</button>
                        </div>
            </div>
          </div>

            {adminData.map((item ,index) => {
                return (
                    <div key={index} className="Admin_permission_table_body">
                        <div className="Admin_permission_table_body_item">{item.id}</div>
                        <div className="Admin_permission_table_body_item">
                            <div className="user_icon_with_Name">
                                <div className="user_icon"></div>
                                <span className="user_name">{item.name}</span>
                            </div>
                        </div>
                        <div className="Admin_permission_table_body_item">
                            {item.Email}
                        </div>
                        <div className="Admin_permission_table_body_item">{item.Priority}</div>
                        <div className="Admin_permission_table_body_item">{item.Status}</div>
                        <div className="Admin_permission_table_body_item">{item.Created_date}</div>
                        <div className="Admin_permission_table_body_item">
                            {item.Description}
                        </div>
                        <div className="Admin_permission_table_body_item">
                        <div className="Admin_permission_table_body_item">
                        <div className='Permission_button'>
                            <button className='button Approve_button'>Access</button>
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
