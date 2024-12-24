import { useEffect, useState } from 'react';
import { getUserOrders } from '@/lib/api/orders';
import { getStatusLabel } from '@/lib/utils/status';
import type { Order } from '@/types/database';

interface OrderListProps {
  userId: string;
}

export function OrderList({ userId }: OrderListProps) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getUserOrders(userId);
        setOrders(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load orders');
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, [userId]);

  if (loading) return <div>Loading orders...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Order #{order.id.slice(0, 8)}</h3>
              <p className="text-sm text-gray-600">
                From: {order.pickup_location}
              </p>
              <p className="text-sm text-gray-600">
                To: {order.delivery_location}
              </p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {getStatusLabel(order.status)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}