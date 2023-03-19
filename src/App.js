
import './App.css';
import { useEffect,useState } from 'react'; 
import {login,logout } from './Service/WindowAuthentication'
import Loading_screen from './components/Loading_screen';
import Approuter from './components/Approuter';



function App() {


const [loadingState, setLoadingState] = useState(true);

  useEffect( () => {

    const user = localStorage.getItem('user');
    if(user===null){
      async function fetchData() {
        await login('admin','admin').then((response) => {
          console.log(response);
          setLoadingState(false);
        }
        );
      }
      const timer = setTimeout(() => {
        fetchData();
      }, 6000);
  
      return () => clearTimeout(timer);
    }
    else{
      setLoadingState(false);
    }
    


  }, [
    loadingState,
  ]);

 
  return (
    console.log(loadingState),
    <div className="App">

      {loadingState ? <Loading_screen/> : <Approuter/>}

     
 
   <button onClick={logout}>Logout</button> 

    </div>
  );
}

export default App;
