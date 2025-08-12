import React, { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";
import Balance from "./Pages/Balance";
import Manager from "./Pages/Manager";

const App = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <Navbar></Navbar>
          <Balance></Balance>
          <Manager></Manager>
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
