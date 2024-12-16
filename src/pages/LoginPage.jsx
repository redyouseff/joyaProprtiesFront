import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query"; // React Query's useMutation
import axiosInstance from "../axios"; // Import the Axios instance
import logo from "./logo.svg"; // Logo image

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to handle error messages

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Define the mutation using React Query's useMutation
  const mutation = useMutation({
    mutationFn: async (loginData) => {
      const response = await axiosInstance.post("/auth/login", loginData);
      return response.data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token); // Store JWT token
      alert("Login Successful");
      window.location.href = "/DashboardHome"; 
    },
    onError: (error) => {
      setError(error.response?.data?.message || "An error occurred");
    },
  });

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    mutation.mutate({ email, password });
  };

  return (
    <motion.div
      className="min-h-screen bg-[#0e1414] flex flex-col items-center justify-center text-[#EFECE6]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Logo */}
      <div className="text-center mb-20">
        <img src={logo} alt="Joya Properties Logo" className="w-72 mx-auto" />
      </div>

      {/* Login Box */}
      <div className="bg-[#1a1f21] rounded-lg px-8 py-6 shadow-lg flex flex-col items-center w-[90%] max-w-md space-y-4">
        {/* Email Input */}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm text-[#9da5a4] mb-2 tracking-wide"
          >
           User name
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your user name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#0e1414] border-none rounded-full h-12 px-4 text-[#EFECE6] placeholder-[#9da5a4] focus:outline-none"
            required
          />
        </div>

        {/* Password Input */}
        <div className="w-full relative">
          <label
            htmlFor="password"
            className="block text-sm text-[#9da5a4] mb-2 tracking-wide"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#0e1414] border-none rounded-full h-12 px-4 pr-12 text-[#EFECE6] placeholder-[#9da5a4] focus:outline-none"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-10 right-4 text-[#698f8c] focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Error message */}
        {error && (
          <div className="mt-2 text-red-600 text-sm">
            {error}
          </div>
        )}

        {/* Login Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#3d6a64] text-white rounded-full py-3 hover:bg-[#698f8c] focus:outline-none"
          disabled={mutation.isLoading} // Disable the button while loading
        >
          {mutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </div>

      {/* Forgot Password Link */}
      <div className="mt-4">
        <a
          href="/forgot-password"
          className="text-sm text-[#9da5a4] hover:text-[#EFECE6] underline"
        >
          Forgot your password?
        </a>
      </div>
    </motion.div>
  );
};

export default LoginComponent;
