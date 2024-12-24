import { supabase } from '../supabase';

export interface Category {
  id: string
  name: string
  image: string
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) throw error;
  return data || [];
}