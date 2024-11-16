import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const FindUs = () => {
  return (
    <div>
      <h1 className="text-left font-semibold mt-4">Find Us On</h1>
      <div className="flex flex-col pt-4">
        <div className="join join-vertical *:bg-base-100">
          <button className="btn join-item justify-start">
            {" "}
            <span>
              <FaFacebook />
            </span>{" "}
            Facebook
          </button>
          <button className="btn join-item justify-start">
            {" "}
            <span>
              <FaTwitter />
            </span>
            Twitter
          </button>
          <button className="btn join-item justify-start">
            {" "}
            <span>
              <FaInstagram />
            </span>{" "}
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
