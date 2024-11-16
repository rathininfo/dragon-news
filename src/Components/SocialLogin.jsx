import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-2 mt-4 w-full">
      <button className="btn">
        <span>
          <FaGoogle />
        </span>
        Login With Google
      </button>
      <button className="btn">
        <span>
          <FaGithub />
        </span>
        Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
