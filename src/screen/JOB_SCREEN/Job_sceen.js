import React from "react";
import { useState, useEffect } from "react";
import "./job_screen.css";
import All_job from "./All_job";
import Inactive_job from "./Inactive_job";
import Active_job from "./Active";
import Applied_job from "./Applied_job";
import My_job from "./My_job";
import Saved_job from "./Saved_job";

import { Link, useParams } from 'react-router-dom';

export default function Job_screen() {
const { slug } = useParams();

const type ={
  "All-job": "All job",
  "My-job": "My job",
  "Saved-job": "Saved job",
  "Applied-job": "Applied job",
  "Active-job": "Active job",
  "Inactive-job": "Inactive job",
}

const Function_type = {
  "All job": <All_job></All_job>,
  "My job": <My_job></My_job>,
  "Saved job": <Saved_job></Saved_job>,
  "Applied job": <Applied_job></Applied_job>,
  "Active job": <Active_job></Active_job>,
  "Inactive job": <Inactive_job></Inactive_job>,

};
const [job_type,setJob_type]=useState(type['All-job']  );

useEffect(() => {
 
  setJob_type(type[slug]||type['All-job']  );
    
}, [job_type,slug]);




const getclasses = (type) => {
    if (type === slug) {
      return "JOB_LINK active";
    } else {
      return "JOB_LINK";
    }
};

  return (
    
    <div className="JobsContainer">
      <div className="job_container">
        <div className="job_tab">
          <a href="/Job/All-job" className={getclasses("All-job")}  >
            All Jobs
          </a>
          <a href="/Job/My-job" className={getclasses("My-job")}>
            My Jobs
          </a>
          <a href="/Job/Saved-job" className={getclasses("Saved-job")}>
            Saved Jobs
          </a>
          <a href="/Job/Applied-job" className={getclasses("Applied-job")}>
            Applied Jobs
          </a>
          <a href="/Job/Active-job" className={getclasses("Active-job")}>
            Active jobs
          </a>
          <a href="/Job/Inactive-job" className={getclasses("Inactive-job")}>
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
              <h1> {slug} </h1>
            </div>
            <div className="Sort_job">
              <div className="Sorting_job"></div>
              <div className="Status"></div>
            </div>
          </div>
        </div>
        {Function_type[job_type]}



      </div>
    </div>
  );
}
