import { createClient } from "@supabase/supabase-js";

// Used only on the server (in the contact form's server action).
// These env vars have no NEXT_PUBLIC_ prefix, so they never reach the browser.
export function getSupabase() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY. Add them to .env.local.");
  }
  return createClient(url, key, { auth: { persistSession: false } });
}
