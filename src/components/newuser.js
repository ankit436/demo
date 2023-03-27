
import React from 'react';
import { useEffect,useState } from 'react';
import './newuser.css';
import { IsUserNew } from '../Service/Cruds';
import Approuter from './Approuter';




export default function Newuser() {

    const [isClient, setisClient] = React.useState(null);

    const handleClient = (value) => {
        setisClient(value);
        
    };

    const handleClient2 = (value) => {
     
        switch (value) {
            case "client":
                return "Box Active"
                break;
            case "Freelancer":
                return "Box Active"
                break;
            default:
                return "Box"
        }
    }


    const checkuser = () => {
        console.log(isClient);

        if (isClient === null) {
            alert("Please select client or freelancer");
        }
        else {
            IsUserNew().then((response) => {
                if (response === true&&isClient==="client") {
                    alert("pless wait for admin approval");
                }
                else {
                    <Approuter></Approuter>
                }
            });
        }


    }

   

    return (

        <div className="Container">
            
            <div className='CardContainer'>
                <div className="CardTitle">
                    <h1>Join As Client or Freelancer</h1>
                </div>
            <div className="Box_container"   >
                <div className={handleClient2()} onClick={() => handleClient("client")} >
                    <div className={"BoxTitle" }>
                        <h1>Client</h1>
                    </div>
                    <div className="BoxContent"></div>

                </div>
                <div className={handleClient2()} onClick={() => handleClient("Freelancer")}>
                    <div className="BoxTitle">

                        <h1>Freelancer</h1>

                    </div>
                </div>

            </div>

            <div className='Create_Account'>
                <button className='Create_account_button' onClick={checkuser} >Create Account </button>
            </div>
            </div>

        </div>



    );
}