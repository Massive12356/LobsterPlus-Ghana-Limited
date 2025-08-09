import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

import { motion } from "framer-motion";
import LoginIcon from "../assets/loginIcon.jpg";
import { FaTools } from "react-icons/fa";

const Login = () => {
  const handleLogin = () => {
    navigate("/insight-center");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <NavBar />
      {/* Main content area */}
      <main className="flex flex-col md:flex-row flex-grow items-center justify-center px-4 py-2 bg-gray-100 mt-10">
        {/* Login section (left) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
          className="w-full md:max-w-lg lg:max-w-xl space-y-6"
        >
          {/* Workspace Role Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-950 mb-6 border-l-8 pl-3 border-l-blue-900">
            Login-Portal
          </h2>

          {/* Professional guidance text */}
          <p className="flex items-center justify-center gap-2 text-gray-500 text-xs">
            <FaTools className="text-blue-900" />
            If you’ve forgotten your account details, please contact your
            administrator.
          </p>

          {/* Form Box */}
          <form className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <p className="text-center text-gray-600 text-sm">
              Welcome to the{" "}
              <span className="font-bold text-blue-900">LobsterPlus</span> login
              portal. Please enter your credentials to continue.
            </p>
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name=""
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-950 focus:border-2"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 bg-white p-1"
              >
                Email Address
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                required
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-950 focus:border-2"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 bg-white p-1 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Password
              </label>
            </div>

            {/* Button Row */}
            <div className="flex justify-between gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-900 hover:bg-blue-950 text-white py-2 font-bold rounded-md transition cursor-pointer"
              >
                Log in
              </motion.button>
            </div>
            {/* Security note */}
            <p className="text-xs text-gray-900 text-center bg-blue-300/40 p-5 rounded-lg flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m4-6V9a4 4 0 10-8 0v2m-3 0a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8z"
                />
              </svg>
              Your credentials are secure. Do not share them with anyone.
            </p>
          </form>
        </motion.div>

        {/* Right-side image with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
          className="hidden md:flex h-screen  flex-1 items-center justify-center p-4"
        >
          <img
            src={LoginIcon}
            alt="Role Illustration"
            className="max-w-full h-[90%] rounded-xl shadow-lg mt-2"
          />
        </motion.div>
      </main>
    </div>
  );
};
export default Login;
