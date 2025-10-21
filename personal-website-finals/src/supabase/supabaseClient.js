import { createClient } from '@supabase/supabase-js'

// These come from your .env.local file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create a single Supabase client for your entire app
export const supabase = createClient(supabaseUrl, supabaseAnonKey)