import React from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import Footer from '../../layouts/Footer/Footer';
import Navbar from '../../layouts/Navbar/Navbar';

const Main = () => {
    const location=useLocation()
 
    const noheaderfooter=location.pathname.includes('login') ||
     location.pathname.includes('signup')
    return (
        <div>
           {noheaderfooter|| <Navbar/>}
            <Outlet></Outlet>
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // or "dark"
      />
      <div className='mb-24'>
        
     {
        noheaderfooter || <Footer/>
     }
      </div>
        </div>
    );
};

export default Main;