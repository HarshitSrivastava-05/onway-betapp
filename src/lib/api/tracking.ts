import { supabase } from '../supabase';
import type { DeliveryTracking } from '@/types/database';

export async function getOrderTracking(orderId: string): Promise<DeliveryTracking[]> {
  const { data, error } = await supabase
    .from('delivery_tracking')
    .select('*')
    .eq('order_id', orderId)
    .order('timestamp', { ascending: true });

  if (error) throw error;
  return data || [];
}

export async function addTrackingUpdate(
  orderId: string,
  status: string,
  location: string
): Promise<DeliveryTracking | null> {
  const { data, error } = await supabase
    .from('delivery_tracking')
    .insert({
      order_id: orderId,
      status,
      location
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}