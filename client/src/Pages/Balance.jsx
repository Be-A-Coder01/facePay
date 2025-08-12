import React from "react";
import "../FontStyle.css";
const Balance = () => {
  return (
    <div
      className="flex flex-col place-items-center gap-2 my-6 py-5"
      id="balance"
    >
      <p className="text-lg font-semibold text-gray-400">Total balance</p>
      <p className=" text-4xl font-bold">
        75,000<span className="text-gray-400">.53</span>
      </p>
    </div>
  );
};

export default Balance;
