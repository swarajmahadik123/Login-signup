import React, { useEffect, useState,useContext } from 'react';
import { handleSuccess } from '../utils';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './utils/Context';
import Cookies from 'js-cookie';

const FrontPage = () => {
  const {isLoggedIn ,setIsLoggedIn } = useContext(AuthContext);
  const[loggedInUser,setLoggedInUser] = useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  },[])
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    Cookies.remove('_ID');
    setIsLoggedIn(false);
    handleSuccess('User LoggedOut');
    setTimeout(()=>{
        navigate('/login');
    },1000)

  }
  const h1Style = {
    fontFamily: "'Roboto', sans-serif"
  };
  
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      {isLoggedIn? (<>
      <h1 style={h1Style}>{loggedInUser}</h1>
      <button onClick={handleLogOut} type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Logout</button>
      </>) : <h1 style={h1Style}>LOGIN OR SIGNUP TO WEBSITE</h1>}

    </div>
  );
}

export default FrontPage;
