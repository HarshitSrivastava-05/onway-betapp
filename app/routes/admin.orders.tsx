import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AdminOrderList } from "~/components/admin/AdminOrderList";

export async function loader() {
  return json({
    orders: [
      {
        id: '1',
        customerName: 'John Doe',
        status: 'pending',
        total: 299.99,
        createdAt: new Date().toISOString(),
        items: [
          { name: 'Organic Bananas', quantity: 2, price: 2.99 },
          { name: 'Farm Fresh Eggs', quantity: 1, price: 4.99 }
        ]
      }
    ]
  });
}

export default function AdminOrders() {
  const { orders } = useLoaderData<typeof loader>();
  return <AdminOrderList orders={orders} />;
}