import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useOnHoverOutside } from "../Helpers/useOnHoverOutside";

import "./Header.css";

export default function Header() {
  const [user, setuser] = useState(localStorage.getItem("user"));
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };
  useOnHoverOutside(dropdownRef, closeHoverMenu);

  return (
    <div className="Container_body" ref={dropdownRef}>
    <div className="Header_container">
      <div className="Header_logo"></div>
      <div className="header_box_item">
        <div className="header_tab_list_item"  >
          <ul className="header_tab_list">
           <Link to="/" className="Nav_link" onMouseOver={ () => setMenuDropDownOpen(true)} > <li className="header_tab_item_styled">Find Talent </li></Link> 
           <Link to="/Job/All-job"className="Nav_link" onMouseOver={ () => setMenuDropDownOpen(true)}><li className="header_tab_item_styled">Find Work </li></Link> 
           <Link to="/"className="Nav_link" onMouseOver={ () => setMenuDropDownOpen(true)}><li className="header_tab_item_styled">Why Upwork </li></Link> 
           <Link to="/"className="Nav_link" onMouseOver={ () => setMenuDropDownOpen(true)}><li className="header_tab_item_styled">Enterprise </li></Link> 
          </ul>
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
            {user ? (
             <Link to="/profile"> <button className="profile_container">Profile</button></Link>
            ) : (
              <button type="submit" className="button">
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    {isMenuDropDownOpen&&<div className="header_dropdown_container">
      </div>}
    </div>
  );
}
