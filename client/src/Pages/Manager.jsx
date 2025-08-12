import React from "react";
import "../FontStyle.css";

const Manager = () => {
  return (
    <div
      id="manager"
      className=" mx-4 p-2 rounded-2xl shadow-lg shadow-gray-300 border-2 border-gray-300"
    >
      <p className="text-lg font-semibold ml-2">
        Money manager <span className="text-blue-600">&gt; December</span>
      </p>
      <div className="flex mt-4 justify-between p-4">
        <div className="flex flex-col gap-4">
          <i class="fa-solid fa-arrow-up-right-from-square text-red-500 text-[30px] pl-6"></i>
          <p className="text-2xl text-gray-400 font-semibold">Spends</p>
        </div>
        <div>
          <p className="text-5xl font-semibold pt-2">12,000</p>
        </div>
      </div>
    </div>
  );
};

export default Manager;
