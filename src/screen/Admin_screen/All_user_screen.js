import React, { useState, useEffect } from "react";
import {
  getAllUser_detail,
  update_profile_data,
  Delete_profile_data,
} from "../../Service/Cruds";
import { isUserLoggedIn } from "../../Service/WindowAuthentication";
import "./All_user_screen.css";

import { Profile_detail } from "../../Model/Model";

import  "../../Helpers/Loader.css"

export default function All_user_screen() {
  const [alluser, setAlluser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isediting ,setisediting]=useState({"index":-1,"isedit":null})


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUser_detail(
          isUserLoggedIn().substring(5)
        );
        setAlluser(data == null ? [] : data);
        console.log(data);
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

  const edit_profile = async () => {
 
    var response = await update_profile_data(
      isUserLoggedIn().substring(5),
      isediting.isedit
    );
    if (response != null) {
      const newstate = [...alluser];
      const index = alluser.findIndex(
        (i) => i[Profile_detail[0].name] === isediting.isedit[Profile_detail[0].name]
      );
      newstate[index] = isediting.isedit;
      setAlluser(newstate);
    }

    setisediting({"index":-1,"isedit":null})
  };

  const Delete_user_profile = async (item) => {
    var response = await Delete_profile_data(
      isUserLoggedIn().substring(5),
      item
    );
    if (response != null) {
      const newstate = [...alluser];
      const index = alluser.findIndex(
        (i) => i[Profile_detail[0].name] === item[Profile_detail[0].name]
      );
      newstate[index] = item;
      setAlluser(newstate);
    }
  };

  const inputvalue = (item_profile_value, item_profile_name) => {};

  const handle_change = (e)=>{    
    
const {name,value}=e.target;
const newstate=isediting.isedit;

newstate[name]=value;
setisediting({"index":isediting.index,isedit:newstate})


} 
const sorting =()=>{
  console.log("sorting")
  const newstate=[...alluser]
  newstate.sort((a,b)=>a[Profile_detail[0].name]-b[Profile_detail[0].name])
  setAlluser(newstate)
}


  return (
    <div className="user_container">
      <div className="User_table_container">
        <div className="User_table_container_body">
          <div className="user_header">
            <div className="user_table_header_item_list">
              <div className="user_header_item">ID
              <span className="sorting" onClick={sorting}> 
              <i class="fa-sort-up">  U
                {/* <img src="" /> */}
              </i>
               </span>
              
              </div>
              <div className="user_header_item">Name</div>
              <div className="user_header_item">Email</div>
              <div className="user_header_item">Phone</div>

              <div className="user_header_item">Role</div>
              <div className="user_header_item">Action</div>
            </div>
          </div>
          <div className="user_body">
            
            {loading?  <div className="loading">  <span class="loading__anim"></span></div> :
            alluser.map((item, index) => (
              <div className="user_body_item_list" key={index}>
                <div className="user_body_item item_id">
                  {item[Profile_detail[0].name]}
                </div>
                <div className="user_body_item item_name">
                  <input
                    name={Profile_detail[1].name}
                    value={isediting.index===index? isediting.isedit[Profile_detail[1].name]: item[Profile_detail[1].name]}
                    type="text"
                    placeholder=""
                    onChange={(e)=>handle_change(e)}
                    disabled ={isediting.index===index?false:true}
                  ></input>
                </div>
                <div className="user_body_item item_email">
                  <input
                     name={Profile_detail[2].name}
                    value={isediting.index===index? isediting.isedit[Profile_detail[2].name]: item[Profile_detail[2].name]}
                    type="text"
                    placeholder=""
                    onChange={(e)=>handle_change(e)}
                    disabled ={isediting.index===index?false:true}
                  ></input>
                </div>
                <div className="user_body_item item_phone">
                  <input
                    name={Profile_detail[3].name}
                    value={isediting.index===index? isediting.isedit[Profile_detail[3].name]: item[Profile_detail[3].name]}
                    type="text"
                    placeholder=""
                    onChange={(e)=>handle_change(e)}
                    disabled ={isediting.index===index?false:true}
                  ></input>
                </div>

                <div className="user_body_item item_status">
                  {" "}
                  <input
                    name={Profile_detail[4].name}
                    value={isediting.index===index? isediting.isedit[Profile_detail[4].name]: item[Profile_detail[4].name]}
                    type="text"
                    placeholder=""
                    onChange={(e)=>handle_change(e)}
                    disabled ={isediting.index===index?false:true}
                  ></input>
                </div>
                <div className="user_body_item item_action">
                { isediting.index===index?
                <div>
                 <button
                    className="user_body_item edit_action_button"
                    onClick={() =>edit_profile(item)}
                  >
                    Yes
                  </button>
                  <button
                    className="user_body_item delete_action_button"
                    onClick={() =>setisediting({"index":-1,"isedit":null})}
                  >
                    No
                  </button>
                 </div>
                 :
                    
                 <div>
                 <button
                    className="user_body_item edit_action_button"
                    onClick={() => setisediting({"index":index,"isedit":item})}
                  >
                    Edit
                  </button>
                  <button
                    className="user_body_item delete_action_button"
                    onClick={() => Delete_user_profile(item)}
                  >
                    Delete
                  </button>
                 </div>
}
                  
                </div>
              </div>
            ))
            }
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
