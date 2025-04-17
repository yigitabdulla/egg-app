// Layout.jsx
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';

const Layout = () => {

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default Layout;
