import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import FaceAuthenticationPage from "./Pages/FaceAuthenticationPage";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/faceAuthentication"
              element={<FaceAuthenticationPage />}
            ></Route>
          </Routes>
        </>
      ) : (
        <div className="">
          <p>Access Denied use Mobile</p>
        </div>
      )}
    </div>
  );
};

export default App;
