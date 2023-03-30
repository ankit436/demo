
import axios from "axios";
import { json } from "react-router-dom";
const base_Api="https://localhost:7104";



export const isclient=(id)=>{

    return axios.get(base_Api + "/Authentication/Client/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
    })
    .catch((e) => null);

}






export const isfreelancer=(id)=>{
    return axios.get(base_Api + "/Authentication/Freelancer/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
    })
    .catch((e) => null);
}

export const isadmin=(id)=>{
    return axios.get(base_Api + "/Authentication/Admin/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
    })
    .catch((e) => null);
}

export const getAllPendingApprovalByid=async (id) => {
    console.log(id)
    return await axios
    // .get( "https://mocki.io/v1/4c5cb089-5e0d-436e-b3a6-92dd6d8ca632",
    .get(
        base_Api +"/api/Admin/getAllPending_Request",
        {
            headers:{
                "id":id

            }
        }
    
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
    
}

export const getAllUser_detail= async (id)=>{
   
   
    return await axios
    // .get( "https://mocki.io/v1/4c5cb089-5e0d-436e-b3a6-92dd6d8ca632",
    .get(
        base_Api +"/api/Admin/getProfile_data",{
            headers :{
                id:id
            }
        }
        
            
    
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);

}


export const update_profile_data= async (id,profile)=>{

   
    return await axios
    .put(
        base_Api +"/api/Admin/Update_Profile_data",profile,
        {
            headers :{
                id:id
            }
        },
        
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);

}


export const Delete_profile_data= async (id,profile)=>{
    console.log(profile)
    return await axios
    .put(
        base_Api +"/api/Admin/Update_Profile_data",profile,
        {
            headers :{
                id:id
            }
        },
        
    )
    
    .then(Response => {
        console.log(Response.data)
        return Response.data;
    })
    .catch((e) => null);

}



export const updaterequest= async (data)=>{
   
   
    return await axios
    // .get( "https://mocki.io/v1/4c5cb089-5e0d-436e-b3a6-92dd6d8ca632",
    .put(
        base_Api +"/api/Admin/update_admin_request",data

    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);

}

export const setuser=( id)=>{
    return axios.get(base_Api + "/api/Profile/IsUserNew",
    {
        params:{
            id:id
        }
    }

    )
    .then(Response => {

        var x= JSON.parse( JSON.stringify(Response.data));
        sessionStorage.setItem("userType",x.Role)
        return x.Role;
    })
    .catch((e) => null);

}

export const getuser_role=()=>{
    return sessionStorage.getItem("userType")=="null"?null:sessionStorage.getItem("userType");
}

export const setuser_role=(role)=>{
    sessionStorage.setItem("userType",role==null||role==""?"null":role);
}


export const  getAllapprovedclient=async () => {
    return await axios
    .get(base_Api + "/Client/Approved"
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
}


export const Create_user_Role=(id,isclient)=>{
    return  axios
    .get(
        "https://localhost:7104/api/Profile/Create_Role",
        {
        headers:{
            id:id,
            role:isclient
        }
    }
        
    )
    
    .then(Response => {
        console.log(Response.data)
        return Response.data;
    })
    .catch((e) => null);

}



export const IsUserNew=(id,isclient)=>{
    console.log(id)
    console.log(isclient)
    return axios.get(base_Api + "/api/Profile/IsUserNew/",
    {
        params:{
            "id":id,
            "isclient":isclient
        }
    }
    )
    .then(Response => {
        
        return  JSON.parse(JSON.stringify(Response.data)).Status===true;
    })
    .catch((e) => null);
}

export const post_a_job=(post_job)=>{
    return axios.post(base_Api + "/api/Projectdetail/post_a_job",post_job)
    .then(Response => {
        console.log(Response.data);
        return Response.data;
    })
    .catch((e) => null);
}

export const RequsetForclient=(id)=>{
    return axios.get(base_Api + "/Authentication/Request/Client/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
    })
    .catch((e) => null);
}

export const RequsetForfreelancer=(id)=>{

    return axios.get(base_Api + "/Authentication/Request/Freelancer/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
    })
    .catch((e) => null);
}








export const GetAllFreelancerByProjectid=async (id) => {
    return await axios
    .get(base_Api + "/Freelancer/Projectid/"+id
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
}



export const GetAllProjectdetails=async () => {
    return await axios
    .get(base_Api + "/Projectdetails"
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
}


export const GetProjectdetailsByProjectid=async (id) => {
    return await axios
    .get(base_Api + "/Projectdetails/Projectid/"+id
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
}


export const GetProjectdetailsByFreelancerid=async (id) => {

    return await axios
    .get(base_Api + "/Projectdetails/Freelancerid/"+id
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
}


export const GetProjectdetailsByClientid=async (id) => {
    
        return await axios
        .get(base_Api + "/Projectdetails/Clientid/"+id
        )
        
        .then(Response => {
            return Response.data;
        })
        .catch((e) => null);
        
}


export const getallactivejob= async ({project_status,project_state}) => {
    
    console.log("stated");
    return await  axios
    .get(base_Api + "/api/Projectdetail/Getallactiveprojects",
    {
        headers:{
            project_status:project_status,
            project_state:project_state
        }
    }

    )
    
    .then(Response => {
        
        return Response.data;
    })
    .catch((e) => null);
    
}






