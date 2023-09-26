"use client";
import React, { useState, useEffect } from "react";
import OrderList from "../components/OrderList";

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
    <>
      <div>orders</div>
      <OrderList orders={orders} />
    </>
  );
}
