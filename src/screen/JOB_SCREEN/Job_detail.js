



import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./job_screen.css";
import axios from 'axios';




const Job_detail = ({navigation}) => {


    const { slug } = useParams();


    const [job,setJob]=useState({});
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    useEffect(() => {
        setLoading(true);

        
        async function fetchData()  {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${slug}`);
                setJob(res.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }

        const timer = setTimeout(() => {
            fetchData();
          }, 6000);
      
        return () => clearTimeout(timer);
        

       
    }, [job,slug]);

    if(loading){
        return <h1> Loading... </h1>
    }

    if(error){
        return <h1> Error... </h1>
    }

    

    return (
       
        <div className="JobsContainer">
            <div className="job_detail">
                <h1>{job.title}</h1>
                <p>{job.body}</p>
            </div>
        </div>

    );
}


export default Job_detail;