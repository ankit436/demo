
import axios from "axios";
import { json } from "react-router-dom";
const base_Api="https://localhost:7006";



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
    return await axios
    .get( "https://mocki.io/v1/4c5cb089-5e0d-436e-b3a6-92dd6d8ca632",
    
    
    )
    
    .then(Response => {
        return Response.data;
    })
    .catch((e) => null);
    
    
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


export const setuser=( id)=>{
    return axios.get(base_Api + "/Authentication/Getuser/"+id)
    .then(Response => {

        return  json.parse(Response.data);
    })
    .catch((e) => null);

}


export const IsUserNew=(id)=>{
    return axios.get(base_Api + "/Authentication/New/"+id)
    .then(Response => {
        return  json.parse(Response.data)===true;
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



