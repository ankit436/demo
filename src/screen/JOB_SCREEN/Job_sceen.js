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
import { getuser_role } from "../../Service/Cruds";

export default function Job_screen() {
const { slug } = useParams();
const [job_count , setJob_count] = useState(0);
const [sort_job , setSort_job] = useState(0);
const types ={
  "All-job": "All job",
  "My-job": "My job",
  "Saved-job": "Saved job",
  "Applied-job": "Applied job",
  "Active-job": "Active job",
  "Inactive-job": "Inactive job",
}

const Function_type = {
  "All job": <All_job job_counts={setJob_count}></All_job>,
  "My job": <My_job job_counts={setJob_count}></My_job>,
  "Saved job": <Saved_job job_counts={setJob_count}></Saved_job>,
  "Applied job": <Applied_job job_counts={setJob_count}></Applied_job>,
  "Active job": <Active_job job_counts={setJob_count}></Active_job>,
  "Inactive job": <Inactive_job job_counts={setJob_count}></Inactive_job>,

};
const [job_type,setJob_type]=useState(types['All-job']  );

useEffect(() => {
 
  setJob_type(types[slug]||types['All-job']  );
    
}, [job_type,slug]);






const getclasses = (type) => {
    if (type === slug) {
      return "JOB_LINK active";
    } else {
      return "JOB_LINK";
    }
};

const frelancer_tab = () => {
  <>
  <Link to="/Job/My-job" className={getclasses("My-job")}>
            My Jobs
          </Link>
          <Link to="/Job/Saved-job" className={getclasses("Saved-job")}>
            Saved Jobs
          </Link>
          <Link to="/Job/Applied-job" className={getclasses("Applied-job")}>
            Applied Jobs
          </Link>
  </>
}
  return (
    
    <div className="JobsContainer">
      <div className="job_container">
        <div className="job_tab">
          <Link to="/Job/All-job" className={getclasses("All-job")}  >
            All Jobs
          </Link>
          {getuser_role()==='freelancer' && frelancer_tab()}
          <Link to="/Job/Active-job" className={getclasses("Active-job")}>
            Active jobs
          </Link>
          <Link to="/Job/Inactive-job" className={getclasses("Inactive-job")}>
            Inactive jobs
          </Link>
        </div>
        <div className="job_filter_container">
          <div className="job_filter">
            <div className="coutn_job">
              {" "}
              <h1>{job_count} </h1>{" "}
            </div>
            <div className="Active_tab">
              {" "}
              <h1> {slug} </h1>
            </div>
            <div className="Sort_job">
              <div className="Sorting_job">
                <h1>Sort by</h1>
                <div className="Sort_icon"></div>
                
              </div>
              <div className="Status"></div>
            </div>
          </div>
        </div>
        {Function_type[job_type]}
      </div>
    </div>
  );
}
