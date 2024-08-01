import React from 'react'
import Lottie from 'lottie-react';
import Animation from './lottie/Animation - 1722518117314.json';
const Signup = () => {
  return (
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-lg w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
       <div className="md:flex w-full">
         <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
           {/* SVG illustration */}
           <Lottie animationData={Animation} />
         </div>
         <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
           <div className="text-center mb-10">
             <h1 className="font-bold text-3xl text-gray-900">Sign up</h1>
             <p>Enter your information to Sign up</p>
           </div>
           <div>
             <div className="flex -mx-3">
               <div className="w-1/2 px-3 mb-5">
                 <label htmlFor="firstName" className="text-xs font-semibold px-1">First name</label>
                 <div className="flex">
                   <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                     <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                   </div>
                   <input type="text" id="firstName" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="first name" />
                 </div>
               </div>
               <div className="w-1/2 px-3 mb-5">
                 <label htmlFor="lastName" className="text-xs font-semibold px-1">Last name</label>
                 <div className="flex">
                   <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                     <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                   </div>
                   <input type="text" id="lastName" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="last name" />
                 </div>
               </div>
             </div>
             <div className="flex -mx-3">
               <div className="w-full px-3 mb-5">
                 <label htmlFor="email" className="text-xs font-semibold px-1">Email</label>
                 <div className="flex">
                   <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                     <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                   </div>
                   <input type="email" id="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Email" />
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
                   <input type="password" id="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
                 </div>
               </div>
             </div>
             <div className="flex -mx-3">
               <div className="w-full px-3 mb-5">
                 <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Sign up</button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
       <div>
         <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" rel="noopener noreferrer" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
           <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt="Buy me a coffee" />
         </a>
       </div>
     </div>
   </div>
  )
}

export default Signup
