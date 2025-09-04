import React, { useState } from "react";
import { Camera } from "lucide-react";
import faceLogo from "../assets/facepay-logo.png"; // place your uploaded image here

export default function Signup() {
  const [faceCaptured, setFaceCaptured] = useState(false);

  const handleFaceCapture = () => {
    setFaceCaptured(true);
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md text-white">
        <div className="flex justify-center mb-6">
          <img
            src={faceLogo}
            alt="FacePay Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-4">
          FacePay - Sign Up
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />

          <div className="flex flex-col items-center mb-6">
            <button
              onClick={handleFaceCapture}
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg"
            >
              <Camera className="w-8 h-8 text-white" />
            </button>
            <p className="mt-2 text-sm text-gray-400">
              {faceCaptured ? "Face Captured ✅" : "Capture Your Face"}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
