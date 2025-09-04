import React from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Authentication;
