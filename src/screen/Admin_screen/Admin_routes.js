




import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import Admin_Approval from './Admin_Approval';
import All_user_screen from './All_user_screen';


export default function Admin_routes()
{
const { slug } = useParams();


const types ={

    "Manage-Users": "All users",
    "approval": "All approval",
    "Manage-Project": "Manage Project"
  }
  
  const Function_type = {
    "All users": <All_user_screen></All_user_screen>,
    "All approval": <Admin_Approval></Admin_Approval>,
    "Manage Project" : <h1>Manage Project</h1>
  };
  const [job_type,setJob_type]=useState(types['All approval']  );
  
  useEffect(() => {
   
    setJob_type(types[slug]||types['All approval']  );
      
  }, [job_type,slug]);
    return (
        <div>
            {Function_type[job_type]}
        </div>
    )
}