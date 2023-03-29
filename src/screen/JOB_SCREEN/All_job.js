



import "./job_screen.css";
import React from "react";


import Job_tile from "../../components/Job_tile";
import axios from "axios";


export default function All_job() {

  const [job_list, setJob_list] = React.useState([]);
  const [loadingState, setLoadingState] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => { 

    const fetchData = async () => {
      try {
        const data = await axios.get("https://mocki.io/v1/4c5cb089-5e0d-436e-b3a6-92dd6d8ca632");
        setJob_list(data == null ? [] : data.data);
       
        setLoadingState(false);
      } catch (error) {
        setLoadingState(false);
        setError(error);
      }
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

   }, []);




    return (
                

        <div className="job_list">
          <Job_tile job ={job_list} />
        </div> 
    )
}