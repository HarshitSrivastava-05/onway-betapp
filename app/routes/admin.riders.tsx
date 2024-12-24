import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RiderManagement } from "~/components/admin/RiderManagement";

export async function loader() {
  return json({
    riders: [
      {
        id: '1',
        name: 'Mike Wilson',
        status: 'online',
        totalDeliveries: 156,
        rating: 4.8,
        activeOrder: null
      }
    ]
  });
}

export default function AdminRiders() {
  const { riders } = useLoaderData<typeof loader>();
  return <RiderManagement riders={riders} />;
}