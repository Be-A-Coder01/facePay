import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import faceLogo from "../assets/facepay-logo.png";

export default function Signup() {
  const [form, setForm] = useState();
  const nav = useNavigate();
  let userCredientials = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  let formSubmit = async (e) => {
    e.preventDefault();
  };

  let handleCameraClick = () => {
    const { name, email, password, number } = form;

    if (!name || !email || !password || !number) {
      return alert("fill empty fields");
    }

    nav("/faceAuthentication");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center ">
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md text-white mx-4">
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
            name="name"
            onChange={userCredientials}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={userCredientials}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />
          <input
            type="number"
            placeholder="Mobile"
            name="number"
            onChange={userCredientials}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={userCredientials}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none"
          />

          <div
            className="flex flex-col items-center mb-6 "
            onClick={handleCameraClick}
          >
            <p className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <i className="fa-regular fa-camera text-3xl font-thin text-white"></i>
            </p>
          </div>
          <button
            onClick={formSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <a href="/login" className="text-blue-400 hover:underline">
            <Link to="/login">Log In</Link>
          </a>
        </p>
      </div>
    </div>
  );
}
