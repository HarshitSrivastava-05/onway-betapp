import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { InventoryManagement } from "~/components/admin/InventoryManagement";

export async function loader() {
  // This will be replaced with actual Supabase queries
  return json({
    inventory: [
      {
        id: '1',
        product: {
          id: '1',
          name: 'Organic Bananas',
          image: '/images/products/bananas.jpg'
        },
        quantity: 150,
        lowStockAlert: 20
      },
      {
        id: '2',
        product: {
          id: '2',
          name: 'Farm Fresh Eggs',
          image: '/images/products/eggs.jpg'
        },
        quantity: 15,
        lowStockAlert: 30
      }
    ]
  });
}

export default function AdminInventory() {
  const { inventory } = useLoaderData<typeof loader>();
  return <InventoryManagement inventory={inventory} />;
}