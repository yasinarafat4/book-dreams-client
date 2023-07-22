import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BackToTop from "../components/BackToTop/BackToTop";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="bg-white dark:bg-slate-700 dark:text-white">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
      <BackToTop></BackToTop>
    </div>
  );
};

export default Main;
