import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
const location = useLocation();
const noHeaderFooter = location.pathname.includes('login') ||  location.pathname.includes('register') ;

  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
     {noHeaderFooter || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
      <ToastContainer />
      <BackToTop></BackToTop>
    </div>
  );
};

export default Main;
