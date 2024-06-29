import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-40 min-h-14 flex items-center justify-center bg-gray-800 bg-opacity-20">
      <div className="w-full max-w-md p-8 rounded-xl shadow-md bg-white bg-opacity-20">
        <h1 className="text-2xl text-center font-semibold mb-6 text-black">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              type="Email"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-300 "
            />
            {errors.username && (
              <span className="text-red-500 text-sm">
                {errors.username.message}
              </span>
            )}
            <label
              htmlFor="password"
              className="text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
            <div className="flex items-center">
              <button
                type="submit"
                className="btn-neutral bg-gray-200 text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5 mr-2" // Added margin-right for spacing
              >
                Login
              </button>
              <Link
                to="/signup"
                className="btn-neutral bg-gray-200 text-gray py-2 px-4 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5"
              >
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
