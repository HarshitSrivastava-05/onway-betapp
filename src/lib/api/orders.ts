import { supabase } from '../supabase';
import type { Order } from '@/types/database';

export async function createOrder(
  userId: string,
  pickupLocation: string,
  deliveryLocation: string
): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .insert({
      user_id: userId,
      pickup_location: pickupLocation,
      delivery_location: deliveryLocation,
      status: 'pending'
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getUserOrders(userId: string): Promise<Order[]> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getOrderById(orderId: string): Promise<Order | null> {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', orderId)
    .single();

  if (error) throw error;
  return data;
}