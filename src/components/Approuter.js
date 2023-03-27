
import React, { useEffect } from "react";


import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';  

import { setuser } from '../Service/Cruds'
import Visitor from '../screen/visitor';
import Header from './Header';
import Footer from './Footer';
import Profile from '../screen/Profile';
import Job_screen from '../screen/JOB_SCREEN/Job_sceen';
import Job_detail from '../screen/JOB_SCREEN/Job_detail';
import Admin_screen from '../screen/Admin_screen/Admin_screen';

export default function Approuter(){

    
    useEffect(() => {

        const user = localStorage.getItem('user');
        if(user!=null){
          async function fetchuser() {

            const response = await setuser(user);
            console.log(response);
            localStorage.setItem(response)
           
          }
          const timer = setTimeout(() => {
            fetchuser();
          }, 6000);
      
          return () => clearTimeout(timer);
        }
        else{
            alert('Please Login');
        }
        

        

    }, []);

    return(
    

        <Router>  
        <Header/>  
        <Routes>  
                 <Route exact path='/'  element={< Visitor />}></Route> 
                 <Route exact path='/profile'  element={< Profile />}></Route> 
                 <Route exact path='/Job/:slug'  element={< Job_screen />}></Route>
                 <Route exact path='/Job-detail/:slug'  element={< Job_detail />}></Route>
                 <Route exact path='/Admin/:slug'  element={< Admin_screen />}></Route>
       
        </Routes> 
        <Footer/>
        </Router>   



    );
}