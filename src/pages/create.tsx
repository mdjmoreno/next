"use client";
import React, { useState, useEffect } from "react";
import OrderForm from "../components/OrderForms";
import GoBackButton from "../components/GoBackButton/index";

const Home: React.FC = () => {
  const createOrder = async (newOrder: any) => {
    await fetch("http://localhost:3000/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });
  };

  return (
    <div className="relative">
      <GoBackButton />
      <OrderForm onCreateOrder={createOrder} />
    </div>
  );
};

export default Home;
