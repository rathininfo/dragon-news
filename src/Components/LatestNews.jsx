import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-200 p-2 my-6 ">
      <p className="py-2 px-3 bg-[#D72050] text-white font-semibold ">Latest</p>
      <Marquee pauseOnHover="true" speed={100} className="space-x-14">
        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          ut optio nisi magni impedit inventore totam voluptatem. Delectus, quas
          id?
        </Link>

        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          ut optio nisi magni impedit inventore totam voluptatem. Delectus, quas
          id?
        </Link>

        <Link to="/news">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
          ut optio nisi magni impedit inventore totam voluptatem. Delectus, quas
          id?
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
