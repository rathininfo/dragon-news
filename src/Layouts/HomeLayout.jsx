import React from "react";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftNavbar from "../Components/LeftNavbar";
import RightNav from "../Components/RightNav";
import CategoryNews from "../Pages/CategoryNews";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="">
      <Header className="w-11/12 mx-auto"></Header>
      <section>
        <LatestNews></LatestNews>
      </section>
      <nav className="">
        <Navbar className=""></Navbar>
      </nav>
      <main className="w-12/12 mx-auto grid md:grid-cols-12 gap-5 pt-20">
        <aside className="col-span-3 ">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6 ">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 ">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
