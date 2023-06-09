import React from "react";
import "./Admin_Approval.css";
import { useState, useEffect } from "react";
import  "../../Helpers/Loader.css"
import {
  getAllPendingApprovalByid,
  getAllapprovedclient,
  updaterequest,
} from "../../Service/Cruds";
import { isUserLoggedIn } from "../../Service/WindowAuthentication";
import { admin_request } from "../../Model/Model";

export default function Admin_Approval() {
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPendingApprovalByid(
          isUserLoggedIn().substring(5)
        );
        setAdminData(data == null ? [] : data);

        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const Approved = async (item) => {
    item[admin_request[5].name] = "access";

    var response = await updaterequest(item);

    if (response != null) {
      const newstate = [...adminData];
      const index = adminData.findIndex(
        (i) => i[admin_request[8].name] === item[admin_request[8].name]
      );
      newstate[index] = item;
      setAdminData(newstate);
    }
  };

  const Rejected = async (item) => {
    item[admin_request[5].name] = "denied";

    var response = await updaterequest(item);

    if (response != null) {
      const newstate = [...adminData];
      const index = adminData.findIndex(
        (i) => i[admin_request[8].name] === item[admin_request[8].name]
      );
      newstate[index] = item;
      console.log(newstate[index]);
      setAdminData(newstate);
    }
  };

  return (
    <div className="Admin_container">
      {/* <div className="Admin_header">
        <div className="Admin_header_Navbar">Admin</div>
      </div> */}
      <div className="Admin_permission_table">
        <div className="Admin_permission_body">
          <div className="Permission_header_item_list">
          <div className="Admin_permission_table_header">
            <div className="Admin_permission_table_header_item">ID</div>
            <div className="Admin_permission_table_header_item">Request by</div>
            <div className="Admin_permission_table_header_item">Email</div>
            <div className="Admin_permission_table_header_item">Priority</div>
            {/* <div className="Admin_permission_table_header_item">Status</div> */}
            <div className="Admin_permission_table_header_item">
              Created Date
            </div>
            <div className="Admin_permission_table_header_item">
              Description
            </div>
            <div className="Admin_permission_table_header_item">Action</div>
          </div>
          </div>
          <div className="permission_body">
          {loading?  <div className="loading">  <span class="loading__anim"></span></div> :  adminData.length <= 0?

          <div className="Nothing_found_container">Nothing to Approved </div>
          
          :
          adminData.length > 0 &&
            adminData.map((item, index) => {
              return (
                <div key={index} className="Admin_permission_table_body">
                  <div className="Admin_permission_table_body_item">
                    {item[admin_request[0].name]}
                  </div>
                  <div className="Admin_permission_table_body_item">
                    <div className="user_icon_with_Name">
                      <div className="user_icon"></div>
                      <span className="user_names">
                        {item[admin_request[1].name]}
                      </span>
                    </div>
                  </div>
                  <div className="Admin_permission_table_body_item">
                    {item[admin_request[2].name]}
                  </div>
                  <div className="Admin_permission_table_body_item">
                    {item[admin_request[3].name]}
                  </div>
                  {/* <div className="Admin_permission_table_body_item">
                    {item[admin_request[4].name]}
                  </div> */}
                  <div className="Admin_permission_table_body_item">
                    {item[admin_request[5].name]}
                  </div>
                  <div className="Admin_permission_table_body_item">
                    {item[admin_request[6].name]}
                  </div>
                  <div className="Admin_permission_table_body_item">
                    <div className="Admin_permission_table_body_item">
                      {item[admin_request[5].name] === "access" ? (
                        item[admin_request[5].name]
                      ) : item[admin_request[5].name] === "denied" ? (
                        item[admin_request[5].name]
                      ) : (
                        <div className="Permission_button">
                          <button
                            className="button Approve_button"
                            onClick={() => Approved(item)}
                          >
                            Access
                          </button>
                          <button
                            className="button Reject_button"
                            onClick={() => Rejected(item)}
                          >
                            Reject
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
            
        </div>
      </div>
    </div>
  );
}
