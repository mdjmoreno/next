import React, { useState } from 'react';

interface OrderFormProps {
  onCreateOrder: (order: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onCreateOrder }) => {
  const [newOrder, setNewOrder] = useState({
    create_date: '',
    status: '',
    customer: '',
    shipping_address: '',
    shipping_promise: '',
    items: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleCreateOrder = () => {
    onCreateOrder(newOrder);
    setNewOrder({
      create_date: '',
      status: '',
      customer: '',
      shipping_address: '',
      shipping_promise: '',
      items: [],
    });
  };

  return (
    <div className="order-form">
      <h2>Create New Order</h2>
      <input
        type="text"
        name="create_date"
        placeholder="Create Date"
        value={newOrder.create_date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={newOrder.status}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="customer"
        placeholder="Customer"
        value={newOrder.customer}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="shipping_address"
        placeholder="Shipping Address"
        value={newOrder.shipping_address}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="shipping_promise"
        placeholder="Shipping Promise"
        value={newOrder.shipping_promise}
        onChange={handleInputChange}
      />
      <button onClick={handleCreateOrder}>Create Order</button>
    </div>
  );
};

export default OrderForm;
