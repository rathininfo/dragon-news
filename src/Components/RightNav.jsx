import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";

const RightNav = () => {
  return (
    <div>
      <div className="text-left font-semibold text-xl">Login With</div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
      <div>
        <FindUs></FindUs>
      </div>
    </div>
  );
};

export default RightNav;
