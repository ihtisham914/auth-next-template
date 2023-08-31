"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./signupSchema.validate.";

const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-9 bg-slate-100 rounded-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-6"
      >
        <h1 className="text-lg font-semibold mb-2">Sign Up</h1>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name"
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {errors.name?.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          {errors.password && (
            <div className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default signup;
