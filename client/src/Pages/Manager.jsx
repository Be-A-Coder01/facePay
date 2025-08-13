import React from "react";
import "../FontStyle.css";

// import { Notification03Icon } from "@hugeicons/core-free-icons";

const Manager = () => {
  return (
    <div
      id="manager"
      className=" mx-4 p-2 rounded-2xl shadow-lg shadow-gray-300 border-2 border-gray-300"
    >
      <p className="text-md font-semibold ml-2 mt-4">
        Money manager <span className="text-blue-400">&gt; December</span>
      </p>
      <div className="flex justify-between p-4">
        <div className="flex flex-col gap-2">
          {/* <i class="fa-solid fa-arrow-up-right-from-square text-red-500 text-[30px] pl-6"></i> */}
          <i class="hgi hgi-stroke hgi-arrow-up-right-01 font-semibold text-red-600 text-3xl"></i>
          <p className="text-lg text-gray-400 font-semibold">Spends</p>
          <p className="text-3xl font-semibold pt-2">12,000</p>
        </div>
        <div className="flex flex-col  gap-2">
          {/* <i class="fa-solid fa-arrow-up-right-from-square text-red-500 text-[30px] pl-6"></i> */}
          <i class="hgi hgi-stroke hgi-arrow-down-left-01 font-medium text-green-500 text-3xl ml-25"></i>
          <p className="text-lg text-gray-400 font-semibold ml-13">Income</p>
          <p className="text-3xl font-semibold pt-2 ml-10">12,000</p>
        </div>
      </div>
    </div>
  );
};

export default Manager;
