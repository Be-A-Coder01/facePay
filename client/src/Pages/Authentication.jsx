import React from "react";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";
const Authentication = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </>
  );
};

export default Authentication;
