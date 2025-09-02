import React from "react";
import Navbar from "../Pages/Navbar";
import Balance from "../Pages/Balance";
import Manager from "../Pages/Manager";
import Transactions from "../Pages/Transactions";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Balance></Balance>
      <Manager></Manager>
      <Transactions></Transactions>
    </>
  );
};

export default Main;
