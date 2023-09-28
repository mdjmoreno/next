import React, { useState } from 'react';
import { Order, Item } from '../types/types';

interface OrderFormProps {
  onCreateOrder: (order: Order) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onCreateOrder }) => {
  const [newOrder, setNewOrder] = useState<Order>({
    id: 0,
    create_date: new Date().toISOString(),
    status: 'Approve',
    cliente: '',
    shippingAddress: '',
    shippingPromise: new Date().toISOString(),
    items: [],
  });

  const [newItem, setNewItem] = useState<Item>({
    id: 0,
    title: '',
    description: '',
    url: '',
    price: 0,
    quantity: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleItemInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    if (newItem.title && newItem.description && newItem.price && newItem.quantity) {
      setNewOrder({ ...newOrder, items: [...newOrder.items, newItem] });
      setNewItem({
        id: 0,
        title: '',
        description: '',
        url: '',
        price: 0,
        quantity: 0,
      });
    }
  };

  const handleCreateOrder = () => {
    if (
      newOrder.create_date &&
      newOrder.status &&
      newOrder.items.length > 0 &&
      newOrder.cliente &&
      newOrder.shippingAddress
    ) {
      onCreateOrder(newOrder);
      setNewOrder({
        id: 0,
        create_date: new Date().toISOString(),
        status: 'Approve',
        cliente: '',
        shippingAddress: '',
        shippingPromise: new Date().toISOString(),
        items: [],
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Create New Order</h2>
      <input
        type="text"
        name="create_date"
        placeholder="Create Date"
        value={newOrder.create_date}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="status"
        placeholder="Status"
        value={newOrder.status}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="cliente"
        placeholder="Cliente"
        value={newOrder.cliente}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="shippingAddress"
        placeholder="Shipping Address"
        value={newOrder.shippingAddress}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="shippingPromise"
        placeholder="Shipping Promise"
        value={newOrder.shippingPromise}
        onChange={handleInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />

      <h3 className="text-lg font-semibold mb-2">Add Item</h3>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newItem.title}
        onChange={handleItemInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newItem.description}
        onChange={handleItemInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="url"
        placeholder="URL"
        value={newItem.url}
        onChange={handleItemInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={newItem.price}
        onChange={handleItemInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={newItem.quantity}
        onChange={handleItemInputChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
      />

      <button
        onClick={handleAddItem}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
      >
        Add Item
      </button>

      <ul className="mt-4">
        {newOrder.items.map((item, index) => (
          <li key={index} className="text-gray-700">{item.title}</li>
        ))}
      </ul>

      <button
        onClick={handleCreateOrder}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg mt-4"
      >
        Create Order
      </button>
    </div>
  );
};

export default OrderForm;
