export interface Order {
    id: number;
    create_date: string;
    status: 'Approve' | 'Cancel' | 'Delivery' | 'Traveling';
    cliente: string;
    shippingAddress: string;
    shippingPromise: string; 
    items: Item[];
  }
  
  export interface Item {
    id: number;
    title: string;
    description: string;
    url: string;
    price: number;
    quantity: number;
  }
  