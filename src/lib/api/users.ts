import { supabase } from '../supabase';
import type { User } from '@/types/database';

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single();

  return data;
}

export async function updateUserProfile(userId: string, fullName: string) {
  return supabase
    .from('users')
    .update({ full_name: fullName, updated_at: new Date().toISOString() })
    .eq('id', userId);
}