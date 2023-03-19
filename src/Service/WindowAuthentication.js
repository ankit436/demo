
import axios from 'axios';

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
   


export const logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}





