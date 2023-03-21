import React from "react";
import { Link } from "react-router-dom";
import "./job_tile.css";




const Job_tile = ({job}) => {




    return (
      <div className="job_list_container">
         <Link to="/Job-detail/2" className="link" >
      <div className="job_tiles"  >

        <div className="job_Name">
          <h1>Job Name   
             </h1>
        </div>
        <div className="job_for">
          <h1>Job For</h1>
        </div>
        <div className="candiate">
          <h1>Candiate</h1>
        </div>
        <div className="job_status">
          <h1>Job Status</h1>
        </div>
        <div className="job_date">
          <h1>Job Date</h1>
        </div>
      </div>
      </Link>
      <Link to="/Job-detail/2" className="link" >
      <div className="job_tiles"  >

        <div className="job_Name">
          <h1>Job Name   
             </h1>
        </div>
        <div className="job_for">
          <h1>Job For</h1>
        </div>
        <div className="candiate">
          <h1>Candiate</h1>
        </div>
        <div className="job_status">
          <h1>Job Status</h1>
        </div>
        <div className="job_date">
          <h1>Job Date</h1>
        </div>
      </div>
      </Link>
    </div>
    );
}

export default Job_tile;
