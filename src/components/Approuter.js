
import React from "react";

import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';  
import Visitor from '../screen/visitor';
import Header from './Header';
import Footer from './Footer';
import Profile from '../screen/Profile';
import Job_screen from '../screen/JOB_SCREEN/Job_sceen';

export default function Approuter(){

    return(
    

        <Router>  
        <Header/>  
        <Routes>  
                 <Route exact path='/'  element={< Visitor />}></Route> 
                 <Route exact path='/profile'  element={< Profile />}></Route> 
                 <Route exact path='/Job/:slug'  element={< Job_screen />}></Route>
       
        </Routes> 
        <Footer/>
        </Router>   



    );
}