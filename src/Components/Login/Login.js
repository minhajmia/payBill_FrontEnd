import React, { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const UserContext = createContext();
const Login = () => {
  const [user, setUser] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(user);
  const navigate = useNavigate();

  // Login
  const handleLogin = (data) => {
    const email = data.email;
    fetch(`http://localhost:5000/api/login?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.email) {
          alert("Please Register");
        }
        setUser(true);
      })
      .catch((err) => {
        alert(`${err.message} . Please Register `);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: "Email field is required",
              })}
            />
            {errors.email && (
              <p role="alert" className="text-error">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            {errors.password && (
              <p role="alert" className="text-error">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn">Login</button>
          </div>
          <p className="text-center">
            New User?
            <Link to="/register" className="font-bold italic underline">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
