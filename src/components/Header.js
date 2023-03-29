import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnHoverOutside } from "../Helpers/useOnHoverOutside";
import { getuser_role } from "../Service/Cruds";

import { isUserLoggedIn } from "../Service/WindowAuthentication";

import "./Header.css";
import { DashboardNavbar,AdminNavbar,ClientNavbar,FreelancerNavbar,JobNavbar } from "./header_drop_down";

export default  function Header() {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
  const [isuser, setisuser] = useState( getuser_role()||"admin");
  const [isdropdowncontent, setdropdowncontent] = useState("");


  useEffect(() => {
    setisuser(getuser_role()||"admin");
  }, [isuser]);

  const closeHoverMenu = () => {

    setMenuDropDownOpen(false);
    setdropdowncontent(null);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  const setdropdownscontent = (content) => {
    setdropdowncontent(content);
  }



  const dropdownopent = (content) => {
    setMenuDropDownOpen(true);
    setdropdownscontent(content);

  }

const Navbar_dropdown = () => {
  switch (isdropdowncontent) {
    case "Dashboard":
      return <DashboardNavbar></DashboardNavbar>
    case "Job":
      return <JobNavbar></JobNavbar>
    case "Admin":
      return <AdminNavbar></AdminNavbar>
    case "Freelancer":
      return <FreelancerNavbar></FreelancerNavbar>
    case "Client":
      return <ClientNavbar></ClientNavbar>
  }
}

const commontab_link = () => {
  return <>
   <Link to="/" className="Nav_link" > <li className="header_tab_item_styled"  onMouseOver={()=>dropdownopent("Dashboard")} >Dashboard </li></Link>
    <Link to="/" className="Nav_link" ><li className="header_tab_item_styled" onMouseOver={()=>dropdownopent("Job")}>Job </li></Link>
  </>
};

  const commontab = () =>{
    return   <ul className="header_tab_list">
    {commontab_link()}
    </ul>
  }

  const admintab = () =>{
    return   <ul className="header_tab_list">
     {commontab_link()}
    <Link to="/" className="Nav_link" ><li className="header_tab_item_styled" onMouseOver={()=>dropdownopent("Admin")}>Admin </li></Link>
  </ul>
  }

const FreelancerTab = () =>{
  return   <ul className="header_tab_list">
   {commontab_link()}
  <Link to="/" className="Nav_link" ><li className="header_tab_item_styled" onMouseOver={()=>dropdownopent("Freelancer")}>Freelancer </li></Link>
  
</ul>
}

const ClientTab = () =>{
  return   <ul className="header_tab_list">
    {commontab_link()}
  <Link to="/" className="Nav_link" ><li className="header_tab_item_styled" onMouseOver={()=>dropdownopent("Client")}>Client </li></Link>
  </ul>
}



const dropdowncontainer = () =>{
  return Navbar_dropdown();
}



  return (
    <div className="Container_body" ref={dropdownRef}>
    <div className="Header_container">
      <div className="Header_logo"></div>
      <div className="header_box_item">
        <div className="header_tab_list_item"  >
          {isuser===null? commontab():isuser==="admin"?admintab():isuser==="client"?ClientTab():FreelancerTab()
        
          }
        </div>
        <div className="header_search_login">
          <div className="header_search_container">
            <div className="Text_container">
              <div className="header_search_icon"></div>
              <input
                type="text"
                className="header_search_text"
                placeholder="Search"
              />
            </div>
            <div className="Divider"></div>
            <div className="header_talent_button">
              <button type="submit" className="find_talent_button">
                Find Talent <span className="chevron">&nbsp;&nbsp;</span>{" "}
              </button>
            </div>
          </div>
          <div className="header_login">
            {isUserLoggedIn() ? (
             <Link to="/profile"> <button className="profile_container"></button></Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    {isMenuDropDownOpen&&dropdowncontainer()
    }
    </div>
  );
}
