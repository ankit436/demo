
import React from "react";

import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';  
import Visitor from '../screen/visitor';
import Header from './Header';
import Footer from './Footer';
import Profile from '../screen/Profile';
import Job_screen from '../screen/JOB_SCREEN/Job_sceen';
import Job_detail from '../screen/JOB_SCREEN/Job_detail';

export default function Approuter(){

    return(
    

        <Router>  
        <Header/>  
        <Routes>  
                 <Route exact path='/'  element={< Visitor />}></Route> 
                 <Route exact path='/profile'  element={< Profile />}></Route> 
                 <Route exact path='/Job/:slug'  element={< Job_screen />}></Route>
                 <Route exact path='/Job-detail/:slug'  element={< Job_detail />}></Route>
       
        </Routes> 
        <Footer/>
        </Router>   



    );
}