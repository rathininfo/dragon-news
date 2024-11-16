import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

  const { createNewUser } = useContext(AuthContext);

  const handleSubmit = (e) =>{
    e.preventDefault()
    //add form data
    const form = new FormData(e.target);
    const name = form.get("name")
    const photo = form.get("photo")
    const email = form.get("email")
    const password = form.get("password")
    console.log({email, password, name, photo})
    
    createNewUser(email, password)
    .then((result) => {
      // Signed up 
      const user = result.user;
      console.log(user)
      // ...
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  };


  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="hero-content  flex-col">
        <div className="">
          <h1 className="text-2xl font-semibold">Register your account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 rounded-none p-6">

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your Phone Url"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control flex flex-row items-center gap-2 mt-5">
              <input type="checkbox" className="checkbox" />
              <span>Accept Terms & Conditions</span>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-none">Register</button>
            </div>
          </form>

          <p className="text-center font-semibold text-sm">
            {" "}
            Dont’t Have An Account ?{" "}
            <Link to="/auth/login" className="text-red-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
