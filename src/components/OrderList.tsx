import React from 'react';
import { Order } from '../types/types';

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <div className="order-list">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <ul>
        {orders?.map((order, index) => (
          <li key={index} className="mb-4">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <p className="text-gray-700">ID: {order.id}</p>
              <p className="text-gray-700">Create Date: {order.create_date}</p>
              <p className="text-gray-700">Status: {order.status}</p>
              <p className="text-gray-700">Cliente: {order.cliente}</p>
              <p className="text-gray-700">Shipping Address: {order.shippingAddress}</p>
              <p className="text-gray-700">Shipping Promise: {order.shippingPromise}</p>
              <h3 className="text-lg font-semibold mt-2">Items:</h3>
              <ul>
                {order.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="ml-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <p className="text-gray-700">Title: {item.title}</p>
                      <p className="text-gray-700">Description: {item.description}</p>
                      <p className="text-gray-700">URL: {item.url}</p>
                      <p className="text-gray-700">Price: ${item.price}</p>
                      <p className="text-gray-700">Quantity: {item.quantity}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
