export interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  status: string;
  pickup_location: string;
  delivery_location: string;
  created_at: string;
  updated_at: string;
}

export interface DeliveryTracking {
  id: string;
  order_id: string;
  status: string;
  location: string;
  timestamp: string;
}