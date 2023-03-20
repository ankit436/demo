import React from "react";
import "./job_tile.css";

export default function job_tile({ props }) {
  return (
    <div className="job_list_container">
      <div className="job_tiles">
        <div className="job_Name">
          <h1>Job Name</h1>
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
    </div>
  );
}
