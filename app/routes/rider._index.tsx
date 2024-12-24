import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RiderDashboard } from "~/components/rider/RiderDashboard";

export async function loader() {
  return json({
    rider: {
      id: '1',
      name: 'Mike Wilson',
      status: 'online',
      todaysDeliveries: 8,
      todaysEarnings: 450,
      currentOrder: null
    }
  });
}

export default function RiderIndex() {
  const { rider } = useLoaderData<typeof loader>();
  return <RiderDashboard rider={rider} />;
}