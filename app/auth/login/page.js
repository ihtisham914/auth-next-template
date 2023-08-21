"use client";
import React from "react";
import yupResolver from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import loginSchema from "./loginSchema.validate";

const login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(loginSchema) });
  // const onSubmit = (data) => console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        // onSubmit={handleSubmit(onSubmit)}
        className="p-9 bg-slate-100 rounded-md"
      >
        <h1 className="text-lg font-semibold mb-2">Login</h1>
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
            // {...register("email")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
          {/* {errors.email && <div>{errors.email?.message}</div>} */}
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
            // {...register("password")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
          {/* {errors.password && <div>{errors.password?.message}</div>} */}
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Remember me
          </label>
        </div>
        <input
          type="submit"
          value="Login"
          className="text-white bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        />
      </form>
    </div>
  );
};

export default login;
