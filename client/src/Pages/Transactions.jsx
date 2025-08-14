import React from "react";
import "../FontStyle.css";
import TransactionCards from "./TransactionCards";

const Transactions = () => {
  return (
    <div
      id="transactions"
      className="mx-3 rounded-2xl flex flex-col gap-3 mt-10"
    >
      <p className="text-3xl font-semibold">Recent transactions</p>
      <div className="flex justify-between">
        <TransactionCards></TransactionCards>
        <TransactionCards></TransactionCards>
        <TransactionCards></TransactionCards>
      </div>
    </div>
  );
};

export default Transactions;
