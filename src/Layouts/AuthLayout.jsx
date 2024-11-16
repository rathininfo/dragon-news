import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100">
      <header className="">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
