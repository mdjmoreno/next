import React, { useState, useEffect } from "react";
import OrderList from "../components/OrderList";
import GoBackButton from "../components/GoBackButton/index";

export default function Home() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch("http://localhost:3000/api/orders");
    const data = await response.json();
    setOrders(data.orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <GoBackButton />
      <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Order List</h1>

        <OrderList orders={orders} />
      </div>
    </div>
  );
}
