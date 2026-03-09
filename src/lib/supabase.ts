import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Comment {
  id: string;
  content_type: 'article' | 'recipe';
  content_slug: string;
  name: string;
  message: string;
  created_at: string;
}
