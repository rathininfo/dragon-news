import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="hero-content  flex-col">
        <div className="">
          <h1 className="text-2xl font-semibold">Login your account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-6">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-none">Login</button>
            </div>
          </form>
          <p className="text-center font-semibold text-sm">
            Dont’t Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
