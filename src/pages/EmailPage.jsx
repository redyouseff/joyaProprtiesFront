import React from "react";
import logo from "../component/Mask group.svg"; // Import the logo

const EmailInputComponent = () => {
  return (
    <div className="min-h-screen bg-[#0e1414] flex flex-col items-center justify-center text-[#EFECE6]">
      {/* Logo */}
      <div className="text-center mb-10">
        <img src={logo} alt="Joya Properties Logo" className="w-40 mx-auto" />
      </div>

      {/* Email Input Box */}
      <div className="bg-[#1a1f21] rounded-lg px-8 py-6 shadow-lg flex flex-col items-center w-[90%] max-w-md">
        <label
          htmlFor="email"
          className="text-sm text-[#9da5a4] mb-4 tracking-wide text-center"
        >
          Enter Your Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder=""
          className="w-full bg-[#0e1414] border-none rounded-full h-12 px-4 text-[#EFECE6] placeholder-[#9da5a4] focus:outline-none"
        />
      </div>

      {/* Back to Dashboard */}
      <div className="mt-4">
        <a
          href="/dashboard" // Replace with the actual link
          className="text-sm text-[#9da5a4] hover:text-[#EFECE6] underline"
        >
          Back To The Dashboard
        </a>
      </div>
    </div>
  );
};

export default EmailInputComponent;
