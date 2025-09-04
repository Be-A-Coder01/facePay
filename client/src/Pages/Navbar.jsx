import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../FontStyle.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-4 px-5   flex justify-between">
      <i className="fa-solid fa-circle-info text-2xl text-gray-700"></i>
      <i
        class="fa-solid fa-gear text-2xl text-gray-700"
        onClick={() => setOpen(!open)}
      ></i>
      {open && (
        <div className="absolute right-5 mt-10">
          <div
            className=" shadow-gray-300 shadow-lg  flex flex-col gap-5 p-4 rounded-xl  bg-white"
            id="transactions"
          >
            <div className="flex gap-5  place-items-center py-1 text-gray-500">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p className="text-xl font-medium">History</p>
            </div>
            <div className="flex gap-5  place-items-center py-1 text-gray-500">
              <i class="fa-regular fa-user"></i>
              <p className="text-xl font-medium">Profile</p>
            </div>
            <div className="flex gap-5  place-items-center py-1 text-gray-500">
              <i class="fa-solid fa-arrow-right-to-bracket"></i>
              <p className="text-xl font-medium">
                <Link to="/auth">SignUp</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
