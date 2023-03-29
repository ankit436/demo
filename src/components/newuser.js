
import React from 'react';
import { useEffect,useState } from 'react';
import './newuser.css';
import { IsUserNew,setuser_role } from '../Service/Cruds';
import Approuter from './Approuter';
import { isUserLoggedIn } from '../Service/WindowAuthentication';




export default function Newuser() {

    const [isClient, setisClient] = React.useState(null);

    const handleClient = (value) => {
        if(isClient!==value){
            setisClient(value);
        }
        else{
            setisClient(null);
        }
       
        
    };

    const handleClient2 = (value) => {
     
        if (isClient === value) {
            return "Box Active";
        }
        else {
            return "Box";
        }
    }


    const CreateUseRrole = () => {
        
        if (isClient === "client") {

            IsUserNew(  isUserLoggedIn().substring(5), "client");
            setuser_role("client");
            window.location.href = "/profile";
        }
        else if (isClient === "Freelancer") {
            IsUserNew(  isUserLoggedIn().substring(5), "freelancer");
            setuser_role("freelancer");
            window.location.href = "/profile";
        }
        else {
            alert("Please Select Client or Freelancer");
        }


    }

   

    return (

        <div className="card_Container">
            
            <div className='CardContainer'>
                <div className="CardTitle">
                    <h1>Join As Client or Freelancer</h1>
                </div>
            <div className="Box_container"   >
                <div className={handleClient2("client")} onClick={() => handleClient("client")} >
                    <div className={"BoxTitle" }>
                        <h1>Client</h1>
                    </div>
                    <div className="BoxContent"></div>

                </div>
                <div className={handleClient2("Freelancer")} onClick={() => handleClient("Freelancer")}>
                    <div className="BoxTitle">

                        <h1>Freelancer</h1>

                    </div>
                </div>

            </div>

            <div className='Create_Account'>
                <button className='Create_account_button' onClick={CreateUseRrole} >Create Account </button>
            </div>
            </div>

        </div>



    );
}