import "dotenv/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL as string;

// FIX: use SERVICE ROLE KEY (already in your env)
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!supabaseUrl) throw new Error("SUPABASE_URL is missing");
if (!supabaseKey) throw new Error("SUPABASE_SERVICE_ROLE_KEY is missing");

export const supabase: SupabaseClient = createClient(
  supabaseUrl,
  supabaseKey
);