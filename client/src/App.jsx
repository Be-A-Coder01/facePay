import React, { useEffect, useState } from "react";
import Navbar from "./Pages/Navbar";

const App = () => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div>
      {isMobile ? (
        <Navbar></Navbar>
      ) : (
        <div className="">
          <p>Access Denied use Mobile</p>
        </div>
      )}
    </div>
  );
};

export default App;
