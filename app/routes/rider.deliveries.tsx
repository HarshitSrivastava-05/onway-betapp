import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DeliveryHistory } from "~/components/rider/DeliveryHistory";

export async function loader() {
  return json({
    deliveries: [
      {
        id: '1',
        orderId: '1234',
        customerName: 'John Doe',
        pickupLocation: '123 Store St',
        dropLocation: '456 Home Ave',
        amount: 299.99,
        status: 'completed',
        completedAt: new Date().toISOString()
      }
    ]
  });
}

export default function RiderDeliveries() {
  const { deliveries } = useLoaderData<typeof loader>();
  return <DeliveryHistory deliveries={deliveries} />;
}