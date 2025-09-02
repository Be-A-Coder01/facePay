import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Authentication from "./Pages/Authentication";
import Main from "./Pages/Main";

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
            <Route path="/auth" element={<Authentication />} />
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
