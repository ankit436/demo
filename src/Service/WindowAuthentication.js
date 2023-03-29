
import axios from 'axios';
import { json } from 'react-router-dom';

const base_Api="https://localhost:7006";
// https://localhost:7006/Authentication


    
export const login = async (username, password) => {

    return await axios
    .get(base_Api + "/Authentication"
    )

    
    .then(Response => {
        localStorage.setItem('user', JSON.stringify(Response.data));
        return Response.data;
    })
    .catch((e) => null);
    
};

export const isUserLoggedIn = () => {
    let user = localStorage.getItem('user');
    if (user === null) return null;
    return JSON.parse(user).Name;
}

export const getLoggedInUser = () => {
    let user = localStorage.getItem('user');
    if (user === null) return '';
    return JSON.parse(user);
}







export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}





