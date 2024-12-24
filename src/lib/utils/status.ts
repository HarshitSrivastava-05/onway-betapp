export const ORDER_STATUSES = {
  PENDING: 'pending',
  PICKUP: 'pickup',
  IN_TRANSIT: 'in_transit', 
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled'
} as const;

export function getStatusLabel(status: string): string {
  const labels: Record<string, string> = {
    [ORDER_STATUSES.PENDING]: 'Pending',
    [ORDER_STATUSES.PICKUP]: 'Pickup in Progress',
    [ORDER_STATUSES.IN_TRANSIT]: 'In Transit',
    [ORDER_STATUSES.DELIVERED]: 'Delivered',
    [ORDER_STATUSES.CANCELLED]: 'Cancelled'
  };

  return labels[status] || status;
}