import React from 'react';

interface OrderListProps {
  orders: any[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
 
  return (
    <div className="order-list">
      <h2>Orders</h2>
      <ul>
        {orders?.map((order, index) => (
          <li key={index}>{order.id}  {order.status} {order.create_date}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
