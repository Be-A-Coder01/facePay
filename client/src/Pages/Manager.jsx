import React from "react";
import "../FontStyle.css";

// import { Notification03Icon } from "@hugeicons/core-free-icons";

const Manager = () => {
  return (
    <div
      id="manager"
      className=" mx-4 py-2 px-3 rounded-2xl mt-12 shadow-lg shadow-gray-300 border-2 border-gray-300"
    >
      <p className="text-md font-semibold ml-2 mb-1 text-gray-400">
        Money manager <span className="text-blue-400">&gt; December</span>
      </p>
      <div className="flex justify-between">
        <div className="flex flex-col  w-2/4 place-items-start">
          <i class="hgi hgi-stroke hgi-arrow-up-right-01 font-bold text-red-600 text-4xl"></i>
          <p className="text-md text-gray-400 font-semibold">Spends</p>
          <p className="text-3xl font-semibold ">
            <span id="rup">&#8377;</span>
            12,000
          </p>
        </div>
        <div className="flex flex-col  w-2/4 place-items-end">
          <i class="hgi hgi-stroke hgi-arrow-down-left-01 font-bold text-green-500  text-4xl "></i>
          <p className="text-md text-gray-400 font-semibold ">Income</p>
          <p className="text-3xl font-semibold">
            <span id="rup">&#8377;</span>
            12,000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Manager;
