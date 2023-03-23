



import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./job_detail.css";
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

        // const timer = setTimeout(() => {
        //     fetchData();
        //   }, 6000);
      
        // return () => clearTimeout(timer);
        

       
    }, [job,slug]);

    // if(loading){
    //     return <h1> Loading... </h1>
    // }

    // if(error){
    //     return <h1> Error... </h1>
    // }

    

    return (
       
        <div className="JobsdetailsContainer">
            <div className="job_details_container"> 

                <div className="job_details">
                    <div className="job_details_title">
                        <h1>job.title</h1>


                    </div>
                    <div className="job_details_description">
                        <p>job.desription</p>
                    </div>

                    <div className='job_skils'>
                        <h3>Skills</h3>
                    </div>

                    <div className="job_details_date">
                        <p>job.start</p>
                        <p>job.End</p>

                    </div>


                    <div className="freelancer_details">
                        <Link to={`/freelancer/${job.id}`}>
                            <div className="freelancer_details_container">
                                
                            </div>
                        </Link>
                    </div>

                    

                    
                    
                    

                </div> 
                

            </div>
           
        </div>

    );
}


export default Job_detail;