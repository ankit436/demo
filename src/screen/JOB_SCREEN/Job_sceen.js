import React from "react";
import "./job_screen.css";
import Job_tile from "../../components/Job_tile";


export default function Job_screen() {
  return (
    <div className="Container">
      <div className="job_container">
        <div className="job_tab">
          <a href="#" className="JOB_LINK">
            All Jobs
          </a>
          <a href="#" className="JOB_LINK">
            My Jobs
          </a>
          <a href="#" className="JOB_LINK">
            Saved Jobs
          </a>
          <a href="#" className="JOB_LINK">
            Applied Jobs
          </a>
          <a href="#" className="JOB_LINK">
            Active jobs
          </a>
          <a href="#" className="JOB_LINK">
            Inactive jobs
          </a>
        </div>
        <div className="job_filter_container">
          <div className="job_filter">
            <div className="coutn_job">
              {" "}
              <h1>4 </h1>{" "}
            </div>
            <div className="Active_tab">
              {" "}
              <h1>All job </h1>
            </div>
            <div className="Sort_job">
              <div className="Sorting_job"></div>
              <div className="Status"></div>
            </div>
          </div>
        </div>

        <div className="job_list">
         
          <Job_tile />
        </div>
      </div>
    </div>
  );
}
