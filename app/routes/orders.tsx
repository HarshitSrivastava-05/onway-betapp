import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({
    orders: [
      {
        id: '1',
        date: '2024-01-24',
        status: 'Delivered',
        total: 299.99,
        items: [
          { name: 'Organic Bananas', quantity: 2, price: 2.99 },
          { name: 'Farm Fresh Eggs', quantity: 1, price: 4.99 }
        ]
      }
    ]
  });
}

export default function Orders() {
  const { orders } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">No orders yet</h2>
          <a href="/products" className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors">
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-600">{order.date}</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {order.status}
                </span>
              </div>
              
              <div className="border-t pt-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t mt-4 pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{order.total.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}