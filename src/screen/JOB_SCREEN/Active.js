

import "./job_screen.css";
import React from "react";
import "../../Helpers/Loader.css"


import Job_tile from "../../components/Job_tile";
import axios from "axios";

import {getallactivejob} from "../../Service/Cruds"

export default function Active_job({job_counts}) {

  const [job_list, setJob_list] = React.useState([]);
  const [loadingState, setLoadingState] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => { 

    const fetchData = async () => {
      try {
        const data = await getallactivejob({project_state:0,project_status:0});
        setJob_list(data == null ? [] : data);
       
        setLoadingState(false);
      } catch (error) {
        setLoadingState(false);
        setError(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    job_counts(job_list.length);

    return ()=>clearTimeout(timer)

   }, [job_list]);

    return (
        <div className="job_list">
           {loadingState?<div className="loading">  <span class="loading__anim"></span></div>: <Job_tile job ={job_list} />}
        </div> 
    )

}
