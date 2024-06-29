import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="py-20 flex items-center justify-center bg-gray-800 bg-opacity-20">
      <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-white bg-opacity-20">
        <h1 className="text-2xl text-center font-semibold mb-6 text-black">
          Signup
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", { required: "First Name is required" })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-300"
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                {errors.fullName.message}
              </span>
            )}

            <label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-300"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
            <label
              htmlFor="username"
              className="text-sm font-medium text-black"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register("username", { required: "Username is required" })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple-300"
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
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-black"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="btn-neutral bg-gray-200 text-gray py-2 px-6 rounded-lg transform transition-transform hover:scale-105 bg-opacity-5"
              >
                Signup
              </button>
            </div>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-gray-500 hover:text-gray-700 text-sm font-medium"
          >
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
