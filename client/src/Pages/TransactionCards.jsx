import React from "react";
import "../FontStyle.css";

const TransactionCards = () => {
  return (
    <div className="border-2 flex flex-col gap-5 py-4 px-2 bordre-2 border-dotted rounded-2xl shadow-lg shadow-gray-300">
      <div className="flex gap-10">
        <i class="fa-solid fa-money-bill-trend-up text-3xl"></i>
        <i class="hgi hgi-stroke hgi-arrow-up-right-01 font-bold text-red-600 text-3xl"></i>
      </div>
      <div className=" flex flex-col">
        <p className="text-2xl font-semibold text-gray-400">Bank</p>
        <p className="text-3xl font-bold">
          <span id="rup">&#8377;</span>125
        </p>
      </div>
    </div>
  );
};

export default TransactionCards;
