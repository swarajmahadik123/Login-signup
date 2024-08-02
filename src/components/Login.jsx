import React, { useEffect, useState , useContext } from 'react';
import Lottie from 'lottie-react';
import Animation from './lottie/Animation - 1722518117314.json';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './utils/Context';

const Login = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
 
  const navigate=useNavigate();
  

  const [loginInfo, setloginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    
    const copyloginInfo = { ...loginInfo};
    copyloginInfo[name]=value;
    setloginInfo(copyloginInfo);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    // Check for required fields
    if (!email || !password) {
        return handleError('All fields are required');
    }

    // Check password length
    if (password.length < 6) { // Assuming minimum length is 6
        return handleError('Password must be at least 6 characters long');
    }

    try {
        const url = 'http://localhost:8080/auth/login';
        const response = await axios.post(url, loginInfo, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = response.data;

        const { success, message, jwtToken, name, error } = result;

        if (success) {
            handleSuccess(message);
            localStorage.setItem('token', jwtToken);
            localStorage.setItem('loggedInUser', name);
            Cookies.set('_ID',jwtToken);
            setIsLoggedIn(true);
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } else {
            const details = error?.details?.[0]?.message || message || 'An error occurred';
            handleError(details);
        }
    } catch (error) {
        handleError(error.message || 'An unexpected error occurred');
    }
};


  return (
    <form onSubmit={handleSubmit} action="">
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
     <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-lg w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
            {/* SVG illustration */}
            <Lottie animationData={Animation} />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-gray-900">Login</h1>
              <p>Enter your information to Login</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input value={loginInfo.email} onChange={handleChange} name='email' type="email" id="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="password" className="text-xs font-semibold px-1">Password</label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                    </div>
                    <input onChange={handleChange} value={loginInfo.password}  name='password'  type="password" id="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                    </div>
                </div>
              </div>
              <div className="flex-col  -mx-3">
                <div className="w-full px-3 mb-5">
                  <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Login</button>
                </div>
                <span className="">
                  Don't  have an account ?<Link to="/signup">SignUp</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </form>
  );
}

export default Login;
