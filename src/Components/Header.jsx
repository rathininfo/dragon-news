import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
