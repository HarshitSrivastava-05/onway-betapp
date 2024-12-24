import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AdminDashboard } from "~/components/admin/AdminDashboard";

export async function loader() {
  return json({
    stats: {
      totalOrders: 156,
      activeOrders: 12,
      totalRiders: 25,
      onlineRiders: 18
    }
  });
}

export default function AdminIndex() {
  const { stats } = useLoaderData<typeof loader>();
  return <AdminDashboard stats={stats} />;
}